"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";
import Loading from "@components/Loading"; // Ensure this is defined and imported

const EditPromptComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  useEffect(() => {
    let isMounted = true;
    const getPromptDetails = async () => {
      try {
        const response = await fetch(`/api/prompt/${promptId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch prompt details");
        }
        const data = await response.json();
        if (isMounted) {
          setPost({
            prompt: data.prompt,
            tag: data.tag,
          });
        }
      } catch (error) {
        console.error("Error fetching prompt details:", error);
      }
    };
    if (promptId) getPromptDetails();

    return () => {
      isMounted = false;
    };
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!promptId) return alert("Prompt ID not found");
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to update prompt");
      }
    } catch (error) {
      console.error("Error updating prompt:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

const EditPrompt = () => (
  <Suspense fallback={<Loading />}>
    <EditPromptComponent />
  </Suspense>
);

export default EditPrompt;

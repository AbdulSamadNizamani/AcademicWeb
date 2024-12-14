export const handleFormSubmission = async (data: {
  name: string;
  email: string;
  phone: string;
  course: string;
}) => {
  const response = await fetch("/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

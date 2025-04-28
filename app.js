document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("commentForm");
  const commentText = document.getElementById("commentText");
  const commentsContainer = document.getElementById("comments-container");

  // In-memory JSON array for storing comments
  let comments = [];

  const renderComments = () => {
    // Load the Handlebars template
    const source = document.getElementById("comments-template").innerHTML;
    const template = Handlebars.compile(source);

    // Reverse comments so most recent comes first
    const reversedComments = [...comments].reverse();

    // Render the template with data
    const compiledHtml = template({ comments: reversedComments });
    commentsContainer.innerHTML = compiledHtml;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = commentText.value.trim();
    if (!text) return;

    // Add new comment to array
    comments.push({
      name: "Pilot", // Or replace with a name input later
      text: text
    });

    // Clear input
    commentText.value = "";

    // Re-render
    renderComments();
  });

  // Initial render (if using localStorage later, load it here)
  renderComments();
});

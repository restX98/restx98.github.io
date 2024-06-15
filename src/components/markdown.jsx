"use client";

// TODO: Find a better way
import { Remarkable } from "remarkable";

const md = new Remarkable({
  html: true,
});

function renderMarkdownToHTML(markdown) {
  const renderedHTML = md.render(markdown);
  return { __html: renderedHTML };
}

export function Markdown({ markdown }) {
  markdown = markdown.trim();
  const markup = renderMarkdownToHTML(markdown);
  return <div dangerouslySetInnerHTML={markup} />;
}

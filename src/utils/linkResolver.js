const linkResolver = function(doc){
  // Pretty URLs for known types
  if (doc.type === 'resource_page') return "/resources/" + doc.uid;
  if (doc.type === 'event_page') return "/events/" + doc.uid;
  if (doc.type === 'ministry') return "/ministries/" + doc.uid;

  // Fallback for other types, in case new custom types get created
  return doc.uid;
}

// const html = RichText.render(document.data.text_field, linkResolver);

export default linkResolver;

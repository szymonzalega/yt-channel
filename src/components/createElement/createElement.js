const selector = "[data-ref], [data-child]";

export default function (domParser) {
  return (component) => {
    const doc = domParser.parseFromString(component.render(), "text/html");
    const elements = doc.querySelectorAll(selector);

    elements.forEach((element) => {
      const ref = element.getAttribute("data-ref");
      if (ref) {
        component.refs[ref] = element;
      }
    });

    return doc.body.firstChild;
  };
}

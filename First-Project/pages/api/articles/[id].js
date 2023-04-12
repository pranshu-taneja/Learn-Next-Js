import { articles } from "../../../data";

export default function handler({ query: { id } }, res) {
  const filtered = articles.filter((article) => article.id == id);      //filter method simply returns a array that is built by the callback function processing applied to it inside filter((callback)=>{SomeProcessForFilteringItem});  

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);      //Now we are using the returned array's[0] th value for the response from the filtered array
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
}

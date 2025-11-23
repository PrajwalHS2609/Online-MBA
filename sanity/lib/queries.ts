export const SITEMAP_QUERY = `*[_type in ["page", "post", "mbaCourses",] && defined(slug.current)] {
  "href": select(
    _type == "page" => "/" + slug.current,
    _type == "post" => "/" + slug.current,
    _type == "ServiceCategory" => "/" + slug.current,
    _type == "mbaCourses" => "/" + slug.current,
    "/" + slug.current
  ),
  _updatedAt
}`;
 
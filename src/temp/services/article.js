const BLOG_URL = "";

/**
 * Get the list of articles.
 * 
 * This will fetch only the preview of the articles.
 */
const getArticleList = () => {
  const url = BLOG_URL;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        Promise.reject("Code: " + response.status + " | Message: " + response.statusText);
      }
    });
};

/**
 * Fetch a full article
 * 
 * @param {any} id The article identifier. It can be the id or the slug. If it
 *                 is numeric, the API will treat it as an id. Otherwise, the
 *                 API will treat it as a slug.
 */
const getArticle = (id) => {
  const url = BLOG_URL + "/" + id;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        Promise.reject("Code: " + response.status + " | Message: " + response.statusText);
      }
    });
};

const mockArticleList = {
  articleCount: 2,
  articles: [
    {
      id: 1,
      slug: "slug1",
      pinned: false,
      title: "title1",
      lede: "lede1",
      publishTs: "publishTimestamp1",
      image: "/thumbs/1.png",
      author: {
        name: "authorName1",
        slug: "author_slug_1"
      },
      tags: [
        {
          slug: "tag1",
          name: "Tag 1"
        },
        {
          slug: "tag2",
          name: "Tag 2"
        }
      ]
    },
    {
      id: 2,
      slug: "slug2",
      pinned: false,
      title: "title2",
      lede: "lede2",
      publishTs: "publishTimestamp2",
      image: "/thumbs/2.png",
      tags: [
        {
          id: 2,
          slug: "tag2",
          name: "Tag 2"
        },
        {
          id: 3,
          slug: "tag3",
          name: "Tag 3"
        }
      ]
    }
  ]
};

const articleService = {
  getArticleList: getArticleList,
  getArticle: getArticle
};

export default articleService;
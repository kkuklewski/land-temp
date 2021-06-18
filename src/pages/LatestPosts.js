import React, {useEffect} from 'react';
import axios from 'axios';
import yaml from 'js-yaml'

const MAX_POSTS = 3;

export const fetchBlog = () =>
  axios.get("/blog", {headers: {accept: "application/json"}}).then((response) => response.data);


function LatestPosts() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    const promises = [fetchBlog()]
    Promise
      .all(promises.map(p => p.catch(e => e)))
      .then(
        (results) => {
          const fixed_results = results.filter(result => {
            if(result instanceof Error) {
              return false;
            }
            return true;
          });
          const [raw_post_names] = fixed_results;
          const promises = raw_post_names.slice(-MAX_POSTS).map(name => {
            return axios.get("/blog/" + name, {headers: {accept: "text/plain"}}).then((response) => response.data)
          })
          Promise.all(promises).then(raw_posts => {
            setPosts(raw_posts.map(post => {
              const [_, raw_meta, raw_content = ''] = post.split("---")
              const meta = yaml.load(raw_meta);
              const content = raw_content.trim()
              return {meta, content}
            }))
          })
        }
      )
  }, []);

  return posts.map((post, index) => (
          <div className="col content">
            <div className="card shadow-sm">
    <div className="card" key={index}>
      <img className="card-img-top" src=""/>
      <div className="card-body">
      <h5 className="card-title">{post.meta.title}</h5>
      <p className="card-text">{post.content}</p>
      <a className="btn btn-primary" href={"/blog/" + post.meta.slug}>przycisk</a>
      </div>
    </div>
      </div>
    </div>
  ))
}

export default LatestPosts;

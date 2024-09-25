import PostList from "../components/PostList";

function Category1Page() {
  return (
    <section class="mobile-block">
      <div class="mobile-block_header is-secondary">
        <strong>Все фильмы</strong>
      </div>
      <PostList/>
    </section>
  )
}

export default Category1Page;
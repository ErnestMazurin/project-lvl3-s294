export default () => {
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `
    <div class="jumbotron py-1 mt-3">
      <h1 class="display-4">RSS reader</h1>
      <input id="rss-input" class="w-100 form-control is-valid" value="" type="text" placeholder="Add new RSS feed URL here ...">
      <hr class="my-2"/>
      <div class="container">
        <div class="row">
          <div class="col-2 px-0">
            <a id="rss-submit" class="btn btn-success btn-lg" href="" role="button">Add</a>
          </div>
          <div id="rss-alert" class="col-10 px-0"></div>
        </div>
      </div>
    </div>
    <div id="rss-accordion" class="accordion"></div>`;

  return container;
};

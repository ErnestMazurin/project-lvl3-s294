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
            <a id="rss-submit" class="btn btn-success btn-lg mb-4" href="" role="button">Add</a>
          </div>
          <div id="rss-alert" class="col-10 px-0"></div>
        </div>
      </div>
    </div>

    <div>
      <div class="modal fade" id="rss-modal" tabindex="-1" role="dialog" aria-labelledby="rss-modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="rss-modalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div id="rss-modalBody" class="modal-body"></div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button id="rss-modalLink" type="button" class="btn btn-primary">See more</button>
            </div>
          </div>
         </div>
       </div>
     </div>

     <div id="rss-channels" class="accordion"></ul>`;

  return container;
};

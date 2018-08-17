export default () => {
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `
    <div class="jumbotron py-1 mt-3">
      <h1 class="display-4">RSS reader</h1>
      <input id="rss-input" class="w-100 form-control is-valid" value="" type="text" placeholder="Add new RSS feed URL here ...">
      <hr class="my-2"/>
      <div class="container">
        <div class="row justify-content-start">
          <div class="col-2 px-0">
            <button id="rss-submit" class="btn btn-success btn-lg btn-block mb-4" role="button">Add</button>
          </div>
          <div id="rss-alert" class="col-8"></div>
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
              <a id="rss-modalLink" href="" class="btn text-dark" type="button" target="_blank" rel="noopener noreferrer">See more</a>
            </div>
          </div>
         </div>
       </div>
     </div>

     <div id="rss-channels" class="accordion"></ul>`;

  return container;
};

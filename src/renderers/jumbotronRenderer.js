import $ from 'jquery/dist/jquery.min';

export default () => $('<div/>', { class: 'container' }).html(`
    <div class="jumbotron py-1 mt-3">
      <h1 class="display-4">RSS reader</h1>
      <input class="w-100 form-control is-valid" value="" type="text" placeholder="Add new RSS feed URL here ..." data-element="rss-input"/>
      <hr class="my-2"/>
      <div class="container">
        <div class="row">
          <div class="col-2 px-0">
            <a class="btn btn-success btn-lg" href="" role="button" data-element="rss-submit">Add</a>
          </div>
          <div class="col-10 px-0" data-element="rss-alert"></div>
        </div>
      </div>
    </div>
    <div class="accordion" id="rss-accordion"></div>`);

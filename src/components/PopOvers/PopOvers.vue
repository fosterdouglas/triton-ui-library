<docs>

<h3>Decision Confirmation</h3>
<p></p>

```js
$(function () {

  $( document ).ready(function() {
      $('[data-toggle="popover-1"]').popover('show'),
      $('[data-toggle="popover-2"]').popover('show')
  });

 $('#popover3').on('shown.bs.popover', function () {
     $('#delete-btn2').click(function(){
       $('[data-toggle="popover-1"]').popover('hide')
     })
  }),

 $('#popover4').on('shown.bs.popover', function () {
     $('#confirm-btn2').click(function(){
       $('[data-toggle="popover-2"]').popover('hide')
     })
  })

});

<div class="card-columns columns-1">

        <div id="row-file" class="badge btn pointer d-inline" style={{marginLeft: 9 + 'em'}}>

          <a tabindex="0" id="popover3" class="info pointer text-medium" data-toggle="popover-1" data-html="true" data-title="Permanently delete this?" data-placement="top" data-trigger="click" data-content='<div id="delete-btn2" role="button" class="btn btn-outline-warningfade btn-warn shadow-sm text-danger border-danger rounded-0 m-2 pl-3 pr-3 pt-2 pb-2 pointer">DELETE<i class="far fa-ban ml-2"></i></div>'>

              <i class="fal fa-lg fa-window-close icon-hover text-warning" style={{marginTop: 9.5 + 'em'} }></i>

          </a>
        </div>

        <div id="row-file" class="badge btn pointer d-inline" style={{marginLeft: 16 + 'em'}}>

          <a tabindex="0" id="popover4" class="info pointer text-medium" data-toggle="popover-2" data-html="true" data-placement="top" data-trigger="click" data-content='<div id="confirm-btn2" role="button" class="btn btn-outline-confirmfade btn-conf shadow-sm text-confirm border-confirm rounded-0 m-2 pl-3 pr-3 pt-2 pb-2 pointer">ADD<i class="far fa-check ml-2"></i></div>'>

              <i class="fal fa-lg fa-check-square icon-hover text-success" style={{marginTop: 9.5 + 'em'} }></i>

          </a>
        </div>

</div>
```

</docs>

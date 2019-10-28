<docs>

<h3>Basic</h3>


```js
<div class="card-columns columns-1">

    <div class="card card-hover bg-light rounded-0 border-0 p-2 mt-1 mb-0">
      <div class="col-1 mr-4 mr-sm-3 mr-md-1 mr-lg-0 d-inline-flex">
        <div class="text-center mx-auto">
          <i class="fal fa-horizontal-rule align-middle"></i>
        </div>
      </div>
      <div class="col-10 pl-3 pl-sm-3 pl-md-3 pl-lg-1 d-inline-flex text-dark item-text">
        Here is the first example of a basic unit
      </div>
      <div class="col-1">
      </div>
    </div>

</div>
```

<h3>Boolean</h3>


```js
<div class="card-columns columns-1">

  <div class="card card-hover bg-light rounded-0 border-0 p-2 mt-1 mb-0">
    <div class="col-1 mr-4 mr-sm-3 mr-md-1 mr-lg-0 d-inline-flex">
      <div class="custom-control custom-checkbox text-center mx-auto">
        <input type="checkbox" class="custom-control-input" id="customCheck1" />
        <label class="custom-control-label pointer" for="customCheck1"></label>
      </div>
    </div>
    <div class="col-10 pl-3 pl-sm-3 pl-md-3 pl-lg-1 d-inline-flex text-dark item-text">
      And here is a true/false checkbox! Click me to test it out.
    </div>
    <div class="col-1">
    </div>
  </div>

</div>
```

<h3>Clickable</h3>


```js
<div class="card-columns columns-1">

    <div class="card card-hover clickable bg-light rounded-0 border-0 p-2 mt-1 mb-0 pointer">
      <div class="col-1 mr-4 mr-sm-3 mr-md-1 mr-lg-0 d-inline-flex">
        <div class="text-center mx-auto">
            <i class="fal fa-lg fa-cog text-dark align-middle pointer icon-hover"></i>
        </div>
      </div>
      <div class="col-10 pl-3 pl-sm-3 pl-md-3 pl-lg-1 d-inline-flex text-dark item-text">
        Clicking this element will generally lead to a seperate page or view
      </div>
      <div class="col-1">
      </div>
    </div>

</div>
```

<h3>Enable/Disable</h3>


```js
<div class="card-columns columns-1">

  <div class="card card-hover bg-light rounded-0 border-0 p-2 mt-1 mb-0">
    <div class="col-1 mr-4 mr-sm-3 mr-md-1 mr-lg-1 d-inline-flex">
      <div class="custom-control custom-switch text-center mx-auto">
        <input type="checkbox" class="custom-control-input" id="customSwitch1" />
        <label class="custom-control-label pointer" for="customSwitch1"></label>
      </div>
    </div>
    <div class="col-10 pl-3 pl-sm-3 pl-md-3 pl-lg-0 d-inline-flex text-dark item-text">
      The toggle allows a given parameter to be enabled or disabled.
    </div>
    <div class="col-1">
    </div>
  </div>

  <div class="card bg-light rounded-0 border-0 p-2 mt-1 mb-0 not-allowed">
    <div class="col-1 mr-4 mr-sm-3 mr-md-1 mr-lg-1 d-inline-flex">
      <div class="custom-control custom-switch text-center mx-auto">
        <input disabled type="checkbox" class="custom-control-input custom-control-input-disabled" id="customSwitch2"/>
        <label class="custom-control-label custom-control-label-disabled not-allowed" for="customSwitch2"></label>
      </div>
    </div>
    <div class="col-10 pl-3 pl-sm-3 pl-md-3 pl-lg-0 d-inline-flex text-medium item-text">
      Sometimes a toggle is disabled entirely, as a result of other settings.
    </div>
    <div class="col-1">
    </div>
  </div>


</div>
```

<h3>Expanding</h3>


```js
$(function() {
  $('#expand').click(function(){
      if($('#expand').hasClass("collapsed"))
       {
         $('#expand').removeClass("tog-header"),
         $('#expand').addClass("card-hover"),
         $('#expand .item-text').attr('style', 'font-weight: unset !important')
       } else
       {
         $('#expand').addClass("tog-header"),
         $('#expand').removeClass("card-hover"),
         $('#expand .item-text').attr('style', 'font-weight: 700 !important')
       }
  });
});



<div class="card-columns columns-1">


  <label id="expand" class="card card-hover bg-light text-dark rounded-0 border-0 pl-2 pt-2 pb-2 mt-1 mb-0" type="button" data-toggle="collapse" data-target="#expandMe" aria-expanded="false" aria-controls="expandMe">

      <div class="col-1 mr-4 mr-sm-3 mr-md-0 mr-lg-n2 d-inline-flex">
        <div class="text-center mx-auto">
          <i class="fal fa-horizontal-rule text-dark align-middle"></i>
        </div>
      </div>


      <div class="col d-inline item-text">
      This item can be clicked to expand or collapse!
        <div class="mr-sm-5 mr-lg-4 d-inline float-right">
          <input type="checkbox" id="chevron" />
          <i class="far fa-chevron-down text-dark align-middle icon toggle-down"></i>
        </div>
      </div>

  </label>


<div class="collapse" id="expandMe">
  <div class="border border-dark rounded-0 mt-n2-5">
    <div class="row ml-0 mr-4 mt-3 mb-0">
      <div class="col-1 ml-1"></div>
      <div class="col-auto small mt-1">Sub-Header</div>
      <hr class="col sub-hr" />
    </div>

    <div class="row ml-0 mr-0">
      <div class="col-1 ml-1"></div>
      <div class="col pr-4 pt-1 pb-4">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div>


</div>

```

<h3>File</h3>


```js
$(function () {
  $('[data-toggle="popover"]').popover()

 $('#popover').on('shown.bs.popover', function () {
     $('#delete-btn').click(function(){
       $('[data-toggle="popover"]').popover('hide'),
       $('div').remove('#row')
     })
  })
});

<div class="card-columns columns-1">

    <div id="row" class="card card-hover bg-light rounded-0 border-0 p-2 mt-1 mb-0">
      <div class="col-1 mr-4 mr-sm-3 mr-md-1 mr-lg-0 d-inline-flex">
        <div class="text-center mx-auto">
          <i class="fal fa-horizontal-rule align-middle"></i>
        </div>
      </div>
      <div class="col-10 pl-3 pl-sm-3 pl-md-3 pl-lg-1 d-inline text-dark item-text">
        <i class="fal fa-sm fa-file-alt text-dark ml-1 mr-2 d-inline align-bottom"></i>
        <u class="underline-dotted"><abbr class="initialism">background-check-text.pdf</abbr></u>

        <div id="row-file" class="badge btn pointer ml-1 d-inline" type="button">

          <a tabindex="0" id="popover" class="info pointer text-medium" data-toggle="popover" data-html="true" data-placement="top" data-trigger="focus" data-content='<div id="delete-btn" role="button" class="btn btn-outline-warningfade btn-warn shadow-sm text-danger border-danger rounded-0 m-2 pl-3 pr-3 pt-2 pb-2 pointer">DELETE<i class="far fa-ban ml-2"></i></div>'>

              <i class="fal fa-lg fa-window-close icon-hover text-warning mt-1"></i>

          </a>
        </div>

      </div>
      <div class="col-1">
      </div>
    </div>



</div>
```


<h3>Highlighted</h3>
<p>The highlighted element can be used for an item that's particularly important or needs focus. It also has additional margin spacing on the top and bottom to set it apart. </p>

```js
<div class="card-columns columns-1">

    <div class="card card-hover bg-light highlighted rounded-0 border-0 p-2 mt-2 mb-2">
      <div class="col-1 mr-3 mr-sm-3 mr-md-1 mr-lg-1 d-inline-flex">
        <div class="text-center mx-auto">
          <i class="fal fa-horizontal-rule text-dark align-middle"></i>
        </div>
      </div>
      <div class="col-10 pl-3 pl-sm-3 pl-md-3 pl-lg-0 d-inline-flex text-dark item-text">
        A highlighted item stands out against others
      </div>
      <div class="col-1">
      </div>
    </div>

</div>
```

<h3>Moveable
<i class="p-1 mb-1 fal fa-xs fa-exclamation-triangle text-info bg-white align-middle"></i>
</h3>
<p>This component function uses the jQuery UI library <a class="text-info underline" href="https://api.jqueryui.com/sortable/" target="_blank">Sortable Widget</a>.<br>
(tooltip problem, bootstrap must be loaded AFTER jQuery UI)
</p>

```js
$( function() {
  $( "#sortable" ).sortable({
    opacity: .7
  });
  $( "#sortable" ).disableSelection();
});

<div id="sortable" class="card-columns columns-1">

    <div class="card card-hover bg-light rounded-0 border-0 p-2 mt-1 mb-0">
      <div class="col-1 mr-4 mr-sm-3 mr-md-1 mr-lg-0 d-inline-flex">
        <div class="text-center mx-auto">
          <i class="fal fa-horizontal-rule align-middle"></i>
        </div>
      </div>
      <div class="col-10 pl-3 pl-sm-3 pl-md-3 pl-lg-1 d-inline text-dark item-text">
        Drag me to move me

        <div class="hand close-icon d-inline float-right mr-0"><i class="fal fa-lg fa-grip-lines-vertical text-dark mt-1"></i></div>

      </div>
      <div class="col-1">
      </div>
    </div>

        <div class="card card-hover bg-light rounded-0 border-0 p-2 mt-1 mb-0">
          <div class="col-1 mr-4 mr-sm-3 mr-md-1 mr-lg-0 d-inline-flex">
            <div class="text-center mx-auto">
              <i class="fal fa-horizontal-rule align-middle"></i>
            </div>
          </div>
          <div class="col-10 pl-3 pl-sm-3 pl-md-3 pl-lg-1 d-inline text-dark item-text">
            Another element that can be rearranged

            <div class="hand close-icon d-inline float-right mr-0"><i class="fal fa-lg fa-grip-lines-vertical text-dark mt-1"></i></div>

          </div>
          <div class="col-1">
          </div>
        </div>

</div>
```


<h3>Radio
<i class="p-1 mb-1 fal fa-xs fa-exclamation-triangle text-info bg-white align-middle"></i>
</h3>

```js
<div class="card-columns columns-1">

  <div class="card card-hover bg-light rounded-0 border-0 p-2 mt-1 mb-0">
    <div class="col-1 mr-4 mr-sm-3 mr-md-1 mr-lg-1 pl-4 d-inline-flex">
      <div class="custom-control custom-radio text-center mx-auto">
        <input type="radio" name="radio" class="custom-control-input" id="customCheck4" />
        <label class="custom-control-label pointer" for="customCheck4"></label>
      </div>
    </div>
    <div class="col-10 pl-3 pl-sm-3 pl-md-3 pl-lg-0 d-inline text-dark item-text">
      Select a single option out of many choices
    </div>
    <div class="col-1">
    </div>
  </div>

  <div class="card card-hover bg-light rounded-0 border-0 p-2 mt-1 mb-0">
    <div class="col-1 mr-4 mr-sm-3 mr-md-1 mr-lg-1 pl-4 d-inline-flex">
      <div class="custom-control custom-radio text-center mx-auto">
        <input type="radio" name="radio" class="custom-control-input" id="customCheck5" />
        <label class="custom-control-label pointer" for="customCheck5"></label>
      </div>
    </div>
    <div class="col-10 pl-3 pl-sm-3 pl-md-3 pl-lg-0 d-inline-flex text-dark item-text sibling-label">
      Select a single option out of many choices
    </div>
    <div class="col-1">
    </div>
  </div>

</div>
```
</docs>

<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Page Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <b-ul>
        <b-li class="alertListItem">- Refactor expanding component JS and HTML (use Collapse)</b-li>
        <b-li class="alertListItem">- Animate expanding component dropdown carat</b-li>
        <b-li class="alertListItem">- Fix file delete button</b-li>
        <b-li class="alertListItem">- Distribute components into separate files</b-li>
        <b-li class="alertListItem">- Adjust all components for recent text size change</b-li>
      </b-ul>
  </b-alert>

</div>
```

<h3>Basic</h3>


```js
<template>
  <div>
    <b-button
      block
      class="rowItem rowItemBase cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>Here is an example of the basic row element.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowItemBase cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>And here is a second example of a basic row element.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

  </div>
</template>
```

<h3>Boolean</h3>


```js
<template>
  <div>
    <b-button
      block
      class="rowItem rowItemBase cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-checkbox">
            <input id="customCheck1" class="custom-control-input" type="checkbox"/>
            <label class="custom-control-label cursorPointer" for="customCheck1"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p class="mb-0">Use the checkbox to set something as true or false.</p>
        </div>

        <div class="rowItemSuffix">
        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowItemBase cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-checkbox">
            <input id="customCheck2" class="custom-control-input" type="checkbox"/>
            <label class="custom-control-label cursorPointer" for="customCheck2"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p class="mb-0">Use the checkbox to set something as true or false.</p>
        </div>

        <div class="rowItemSuffix">
        </div>

      </div>

    </b-button>
  </div>
</template>
```

<h3>Clickable</h3>


```js
<template>
  <div>
    <b-button
      block
      class="rowItem rowClickable cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconSettings iconHover"></i>
        </div>

        <div class="rowItemText">
          <p>Here is an example of the basic row element.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowClickable cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconSettings iconHover"></i>
        </div>

        <div class="rowItemText">
          <p>And here is a second example of a basic row element.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

  </div>
</template>
```

<h3>Enable/Disable</h3>


```js
<template>
  <div>

    <b-button
      block
      class="rowItem rowItemBase cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1" />
            <label class="custom-control-label cursorPointer" for="customSwitch1"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p>The toggle allows a given parameter to be enabled or disabled.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowItemBase cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch2" />
            <label class="custom-control-label cursorPointer" for="customSwitch2"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p>Sometimes the toggle itself is disabled entirely, as a result of other settings.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

  </div>
</template>

<div class="card-columns columns-1">


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

<h3>Expanding
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>


```js
<template>
  <div>

    <b-button
      block
      class="rowItem rowExpandable"
      variant="none"
      :class="showCollapse ? 'collapsed' : null"
      :aria-expanded="showCollapse ? 'true' : 'false'"
      aria-controls="collapse"
      @click="showCollapse = !showCollapse"
      onclick="this.blur();"
    >


      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>Click this to expand the row.</p>
        </div>

        <div class="rowItemSuffix">
          <i class="iconChevronClosed"></i>
        </div>


      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowExpandable"
      variant="none"
      :class="showCollapse ? 'collapsed' : null"
      :aria-expanded="showCollapse ? 'true' : 'false'"
      aria-controls="collapse"
      @click="showCollapse = !showCollapse"
      onclick="this.blur();"
    >


      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>Click this to expand the row.</p>
        </div>

        <div class="rowItemSuffix">
          <i class="iconChevronClosed"></i>
        </div>


      </div>

    </b-button>



  </div>
</template>

<script>
$(function() {
  $('#expand').click(function(){
      if($('#collapse').hasClass("collapse"))
        {
          $('#expand').addClass("tog-header"),
          $('#expand').removeClass("card-hover"),
          $('#expand .item-text').attr('style', 'font-weight: 700 !important')
        }
      })
});

$(function() {
  $('#expand').click(function(){
      if($('#collapse').hasClass("show"))
        {
          $('#expand').removeClass("tog-header"),
          $('#expand').addClass("card-hover"),
          $('#expand .item-text').attr('style', 'font-weight: unset !important')
        }
      })
});

  export default {
    data() {
      return {
        showCollapse: false
      }
    }
  }
</script>
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

              <i class="fal fa-lg fa-window-close iconHover text-warning mt-1"></i>

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

<p><small class="text-mediumdark float-right mb-4">Page updated: November 4, 2019</small></p>
</docs>

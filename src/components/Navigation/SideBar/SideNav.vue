<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Page Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <b-ul>
        <b-li class="alertListItem">- Distribute components into separate files</b-li>
        <b-li class="alertListItem">- Update nav item interactivity</b-li>
      </b-ul>
  </b-alert>

</div>
```

<h3>Item</h3>

```js
$(function() {
  $('#changes-made-2').hide(),
  $('#changes-btn-2').click(function(){
         $('#changes-made-2').fadeIn('fast'),
         setTimeout(function(){
         $('#changes-made-2').fadeOut('slow');
         }, 2000);
  });
});

$(function() {
  $('a.nav-link').click(function(){
      if ( $(!'#packages-dropdown'))
      {
         $('#packages-dropdown').dropdown('hide'),
         $('.dropdown-item').removeClass('dropdown-item-active')
      }


         $('a.nav-link').removeClass('active'),
         $(this).addClass('active')
  });
});

$(function() {
  $('.dropdown-item').click(function(){
         $('.dropdown-item').removeClass('dropdown-item-active'),
         $(this).addClass('dropdown-item-active')
  });
});

$(function () {
  $('#packages-dropdown').on('hide.bs.dropdown', function () {
    return false;
  });
});

<div class="row">
  <ul class="nav nav-pills flex-column col-4 mr-0 mt-2 pb-3 pt-3 pr-0 pl-0 mr-3 sticky">
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">First Item</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">A Second One</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">The Third Thing</a>
    </li>
  </ul>
  <div class="col border border-medium ml-3 mr-3 mt-2"></div>
</div>

<ul class="nav-item">
</ul>
```

<h3>Item - Edited</h3>

```js
<div class="row">
  <ul class="nav nav-pills flex-column col-4 mr-0 mt-2 pb-3 pt-3 pr-0 pl-0 mr-3 sticky">
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">First Item</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">
        <small id="pencil-2">
          <i class=" mt-n1 pr-2 fas fa-pencil-alt text-secondary align-middle"></i>
        </small>
      A Second One</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">The Third Thing</a>
    </li>
  </ul>
  <div class="col border border-medium ml-3 mr-3 mt-2"></div>
</div>

<ul class="nav-item">
</ul>
```

<h3>Item - Selected</h3>

```js
<div class="row">
  <ul class="nav nav-pills flex-column col-4 mr-0 mt-2 pb-3 pt-3 pr-0 pl-0 mr-3 sticky">
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer active">First Item</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">A Second One</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">The Third Thing</a>
    </li>
  </ul>
  <div class="col border border-medium ml-3 mr-3 mt-2"></div>
</div>

<ul class="nav-item">
</ul>
```

<h3>Section Break</h3>

```js
<div class="row">
  <ul class="nav nav-pills flex-column col-4 mr-0 mt-2 pb-3 pt-3 pr-0 pl-0 mr-3 sticky">
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">First Item</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">A Second One</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">The Third Thing</a>
    </li>
    <div class="nav-break mb-3 mt-2 mr-4 ml-4"></div>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">The Fourth</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">After That Is Five</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">Six Is Last</a>
    </li>
  </ul>
  <div class="col border border-medium ml-3 mr-3 mt-2"></div>
</div>

<ul class="nav-item">
</ul>
```

<h3>Title - Group</h3>

```js
<div class="row">
  <ul class="nav nav-pills flex-column col-4 mr-0 mt-2 pb-3 pt-3 pr-0 pl-0 mr-3 sticky">
    <li class="nav-item justify-content-end mb-1">
      <ul class="flex-column pl-0">
        <a class="nav-link text-uppercase text-medium text-right disabled pr-4">The Title Of This Group</a>
      </ul>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">First Item</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">A Second One</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">The Third Thing</a>
    </li>
  </ul>
  <div class="col border border-medium ml-3 mr-3 mt-2"></div>
</div>

<ul class="nav-item">
</ul>
```

<h3>Title - Menu</h3>

```js
<div class="row">
  <ul class="nav nav-pills flex-column col-4 mr-0 mt-1 pb-3 pt-3 pr-0 pl-0 mr-3 sticky">
    <li><h2 class=" text-primary text-right disabled pr-4 pt-2 mb-4">Page Title</h2></li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">First Item</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">A Second One</a>
    </li>
    <li class="nav-item justify-content-end mb-1">
      <a class="nav-link nav-over text-uppercase text-primary text-right pr-4 pointer">The Third Thing</a>
    </li>
  </ul>
  <div class="col border border-medium ml-3 mr-3 mt-7"></div>
</div>

<ul class="nav-item">
</ul>
```

</docs>

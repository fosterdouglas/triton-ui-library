<docs>
<h3 id="buttons">Navigation - Standard</h3>
<p>The primary button used for application navigation.

```js
<button class="btn btn-outline-primaryfade btn-stand shadow-sm text-primary border-primary rounded-0 m-2 pl-3 pr-3 pt-2 pb-2">SAMPLE BUTTON</button>

<button class="btn btn-outline-primaryfade btn-stand shadow-sm text-primary border-primary rounded-0 m-2 pl-3 pr-3 pt-2 pb-2">WITH ICON<i class="far fa-arrow-right ml-2"></i></button>

<button class="btn bg-primary btn-stand btn-pressed shadow-sm text-white border-primary  rounded-0 m-2 pl-3 pr-3 pt-2 pb-2">PRESSED</button>

<button class="btn btn-outline-primaryfade not-allowed shadow-sm text-primary rounded-0 text-muted m-2 pl-3 pr-3 pt-2 pb-2" disabled>DISABLED</button>
```

<h3>Navigation - Confirm</h3>
<p>A special-case colored navigation button, used when it's crucial to indicate the action will submit or activate something important.

```js
<button class="btn btn-outline-confirmfade btn-conf shadow-sm text-success border-success rounded-0 m-2 pl-3 pr-3 pt-2 pb-2">SAMPLE BUTTON</button>

<button class="btn btn-outline-confirmfade btn-conf shadow-sm text-success border-success rounded-0 m-2 pl-3 pr-3 pt-2 pb-2">CONFIRM<i class="far fa-check ml-2"></i></button>

<button class="btn bg-confirm btn-pressed shadow-sm text-white border-success rounded-0 m-2 pl-3 pr-3 pt-2 pb-2">PRESSED</button>
```


<h3>Navigation - Warning</h3>
<p>Generally, this variation should only be used to warn the user that the action will be permanent (as in deleting something), or that it will cancel an operation which will result in the loss of inputed data.</p>

```js
<button class="btn btn-outline-warningfade btn-warn shadow-sm text-danger border-danger rounded-0 m-2 pl-3 pr-3 pt-2 pb-2">SAMPLE BUTTON</button>

<button class="btn btn-outline-warningfade btn-warn shadow-sm text-danger border-danger rounded-0 m-2 pl-3 pr-3 pt-2 pb-2">CANCEL<i class="far fa-ban ml-2"></i></button>

<button class="btn bg-warning btn-pressed shadow-sm text-white border-danger rounded-0 m-2 pl-3 pr-3 pt-2 pb-2">PRESSED</button>
```

<h3>Navigation - Feedback</h3>
<p>A navigation button used when feedback is needed. This is particularly useful to inform a user about the status of an important action, for example is a page saves correctly or not.</p>

```js
$(function() {
  $('#changes-made').hide(),
  $('#changes-btn').click(function(){
         $('#changes-made').fadeIn('fast'),
         setTimeout(function(){
         $('#changes-made').fadeOut('slow');
         }, 2000);
  });
});

<div class="row">
  <div class="col-auto">
  <button id="changes-btn" class="btn btn-outline-secondary btn-stand-feedback shadow-sm text-secondary border-secondary rounded-0 m-2 pl-3 pr-3 pt-2 pb-2">SAVE CHANGES</button>
  <span class="text-center">
    <small id="changes-made" class="form-text text-success mt-0">
      <i class="pt-2 pr-2 pb-2 far fa-lg fa-check text-success bg-white align-middle"></i>Changes saved.
    </small>
  </span>
  </div>
</div>
```

<h3>Function - Standard</h3>
<p>The primary button for all of the applications functions. As an example, use this for uploading files, adding users, or assigning new packages. Any low-level functions that the user needs to do to utilize the platform's purpose.</p>

```js
<button class="btn btn-func text-dark shadow-sm border-dark rounded-max m-2 pl-3 pr-3">SAMPLE BUTTON</button>

<button class="btn btn-func text-dark shadow-sm border-dark rounded-max m-2 pl-3 pr-3"><i class="fal fa-file-alt fa-lg mr-2 align-middle"></i>UPLOAD FILE</button>

<button class="btn btn-func-pressed text-dark shadow-sm border-dark rounded-max m-2 pl-3 pr-3"><i class="fal fa-file-alt fa-lg mr-2 align-middle"></i>PRESSED</button>

<button class="btn btn-func-pressed text-dark shadow-sm border-dark rounded-max m-2 pl-3 pr-3"><span class="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>LOADING . . .</button>
```

<h3>Function - Highlighted</h3>
<p>This special variation of the function button is used for unique actions, or to stand out amongst a group of other function buttons.</p>

```js
<button class="btn btn-func-high text-secondary shadow-sm border-secondary rounded-max m-2 pl-3 pr-3">SAMPLE BUTTON</button>

<button class="btn btn-func-high text-secondary shadow-sm border-secondary rounded-max m-2 pl-3 pr-3"><i class="fal fa-file-alt fa-lg mr-2 align-middle"></i>UPLOAD FILE</button>

<button class="btn btn-func-high-pressed shadow-sm border-secondary rounded-max m-2 pl-3 pr-3"><i class="fal fa-file-alt fa-lg mr-2 align-middle"></i>PRESSED</button>

<button class="btn btn-func-high-pressed shadow-sm border-secondary rounded-max m-2 pl-3 pr-3"><span class="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>LOADING . . .</button>
```
</docs>

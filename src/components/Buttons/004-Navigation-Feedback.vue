<docs>

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

</docs>

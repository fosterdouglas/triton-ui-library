<docs>

<h3>Navigation - Feedback
<i class="p-1 mb-1 fal fa-xs fa-exclamation-triangle text-info bg-white align-middle"></i>
</h3>
<p>A navigation button used when feedback is needed. This is particularly useful to inform a user about the status of an important action, for example is a page saves correctly or not.</p>

```js
<template>
  <div class="row">
    <div class="col-auto">

      <b-button
        :pressed="false"
        variant="outline-secondary"
        id="changesBtn"
        class="btnNavigation btnFeedback"
        >
        {{ NavButtonCaption }}
        <i></i>
      </b-button>

      <span class="text-center">
        <small id="changesMade" class="form-text text-success mt-0">
          <i class="pt-2 pr-2 pb-2 far fa-lg fa-check text-success bg-white align-middle"></i>Changes saved.
        </small>
      </span>

    </div>
  </div>
</template>

<script>
$(function() {
  $('#changesMade').hide(),
  $('#changesBtn').click(function(){
     $('#changesMade').fadeIn('fast'),
      setTimeout(function(){
        $('#changesMade').fadeOut('slow');
        },
      2000);
  });
});

  export default {
    data() {
      return {
        NavButtonCaption: 'SAVE CHANGES'
      }
    }
  }
</script>
```

</docs>

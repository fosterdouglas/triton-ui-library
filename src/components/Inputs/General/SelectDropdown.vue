<docs>

<h3>Select Dropdown</h3>
<p>A general-use dropdown. Typically used for a set of less than 15 options. Consider an alternative (potentially the Select List) if working with more options.</p>

```js
<template>
  <div>
    <b-row>
      <b-col cols="6">
        <b-input-group>
          <select name="colors" id="chooser">
            <option disabled selected>Choose One...</option>
            <option>Pink</option>
            <option>Teal</option>
            <option>Orange</option>
            <option>Black</option>
            <option>Banana</option>
          </select>
        </b-input-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  $( function() {
    $( "#chooser" ).selectmenu();
  } );
  export default {
}
</script>
```

</docs>

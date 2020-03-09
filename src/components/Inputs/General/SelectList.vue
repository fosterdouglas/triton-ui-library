<docs>

<h3>Select List
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>A scrolling list that can have categories, used for choosing a single option. <span class="text-info">~Use case currently undetermined, awaiting a redesign~</span></p>

```js

<div class="row">

  <div class="col" title="Favourite Color?">
    <b-form-select :select-size="4" class="form-control cursorDefault" type="text">
      <option disabled>Favourite Color?</option>
      <option class="options">Pink</option>
      <option selected class="options">Teal</option>
      <option class="options">Orange</option>
      <option class="options">Black</option>
      <option class="options">Banana</option>
    </b-form-select>
  </div>

  <div class="col">
    <b-form-select disabled :select-size="4" class="form-control cursorDisabled" type="text">
      <option disabled>Favourite Color?</option>
      <option class="options">Pink</option>
      <option selected class="options">Teal</option>
      <option class="options">Orange</option>
      <option class="options">Black</option>
      <option class="options">Banana</option>
    </b-form-select>
  </div>

</div>
```

</docs>

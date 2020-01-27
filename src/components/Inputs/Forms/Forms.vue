<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- Distribute components into separate files</li>
        <li class="alertListItem">- Adjust autocomplete to be able to highlight items with keyboard</li>
      </ul>
  </b-alert>

</div>
```

<h3>Autocomplete
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>Autocomplete is best used for form fields that have a set finite list of acceptable values, and with
   a large-sized data list (dozens to hundreds). It's ideally used for questions for which
   the user would inheritly or intuitively know an answer for.
   It's not ideal for highly specific questions that need options displayed or explained.</p>

```js
<template>
  <div class="row">

    <div class="col-6 form-label-group ui-widget">
      <b-form-input autocomplete="off" id="form-field-1" class="form-control" placeholder="Favourite Fruit (Required)"/>
      <label for="form-field-1">Favourite Fruit</label>
    </div>

  </div>
</template>
  <script>
  $( function() {
    var availableTags = [
      "Açaí",
      "Akee",
      "Apple",
      "Apricot",
      "Asian pear",
      "Avocado",
      "Banana",
      "Bilberry",
      "Blackberry",
      "Blackcurrant",
      "Black sapote",
      "Blood orange",
      "Blueberry",
      "Boysenberry",
      "Cantaloupe",
      "Crab apples",
      "Currant",
      "Cherry",
      "Cherimoya",
      "Chico fruit",
      "Clementine",
      "Cloudberry",
      "Coconut",
      "Cranberry",
      "Cucumber",
      "Damson",
      "Date",
      "Dragonfruit",
      "Durian",
      "Elderberry",
      "Feijoa",
      "Fig",
      "Goji berry",
      "Gooseberry",
      "Grape",
      "Grapefruit",
      "Guava",
      "Honeyberry",
      "Honeydew",
      "Huckleberry",
      "Jabuticaba",
      "Jackfruit",
      "Jambul",
      "Japanese plum",
      "Jostaberry",
      "Jujube",
      "Juniper berry",
      "Kiwano",
      "Kiwifruit",
      "Kumquat",
      "Lemon",
      "Lime",
      "Loganberry",
      "Loquat",
      "Longan",
      "Lychee",
      "Mandarine",
      "Mango",
      "Mangosteen",
      "Marionberry",
      "Melon",
      "Miracle fruit",
      "Mulberry",
      "Nectarine",
      "Nance",
      "Orange",
      "Papaya",
      "Passionfruit",
      "Peach",
      "Pear",
      "Persimmon",
      "Plantain",
      "Plum",
      "Prune",
      "Pineapple",
      "Pineberry",
      "Plumcot (or Pluot)",
      "Pomegranate",
      "Pomelo",
      "Purple mangosteen",
      "Quince",
      "Raisin",
      "Rambutan",
      "Raspberry",
      "Redcurrant",
      "Salmonberry",
      "Salal berry",
      "Salak",
      "Satsuma",
      "Soursop",
      "Star apple",
      "Star fruit",
      "Strawberry",
      "Surinam cherry",
      "Tamarillo",
      "Tamarind",
      "Tangerine",
      "Tayberry",
      "Ugli fruit",
      "Watermelon",
      "White currant",
      "White sapote",
      "Yuzu"
    ];
    $( "#form-field-1" ).autocomplete({
      source: availableTags,
      maxShowItems: 10,
      autoFocus: true
    });
  } );
export default {

}
  </script>
```

<h3>Text</h3>
<p>Used for basic form text entry. Form fields use a new selector ":placeholder-shown" to keep labels visible during filling.
  The labels are built into each form field for styling simplicity, organization, and consistency.
  <br/>
  The "placeholder" property on the input should be appended with (Required) for forms more than a few fields in length.
  The content of the label should remain without the ammendment qualifier.</p>

```js
<template>

  <div class="row">

  <div class="col form-label-group">
    <b-form-input autocomplete="off" id="form-field-2" class="form-control" placeholder="First Name (Required)"/>
    <label for="form-field-2">First Name</label>
  </div>

  <div class="col form-label-group">
    <b-form-input autocomplete="off" id="form-field-3" class="form-control" placeholder="Last Name (Optional)"/>
    <label for="form-field-3">Last Name</label>
  </div>

  </div>
</template>
<script>
export default {
}
</script>
```

<h3>Text Valid</h3>
<p>Compliant data entered in a text field is marked with a green border and a check mark.</p>

```js
<template>
  <div class="row">

  <div class="col-6 form-label-group">
    <b-form-input :state="true" id="form-field-2" class="form-control" placeholder="Email" value="valid@gmail.com"/>
    <label for="form-field-2">Email</label>
  </div>

  </div>
</template>
```

<h3>Text Invalid</h3>
<p>If entered data doesn't match the required type of the field, it's marked with a red border and an exclamation mark. </p>

```js
<template>
  <div class="row">

  <div class="col-6 form-label-group">
    <b-form-input :state="false" id="form-field-2" class="form-control" placeholder="Email" value="invalid@gmail.commm"/>
    <label for="form-field-2">Email</label>
  </div>

  </div>
</template>
```


</docs>

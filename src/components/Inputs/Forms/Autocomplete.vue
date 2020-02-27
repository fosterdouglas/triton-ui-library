<docs>

```jsx noeditor
<div>
<p class="ml-n3 w-75 mb-0">Form-style fields as seen below are used exclusively for front-facing pages. These are designed to be larger and easier to use in ways specific to the general user/candidate. Any data entry or text fields needed for Triton's general backend system should use a <a href="../../#/Inputs/Text">Text Field</a> element with a proper label.</p>
<br/>
</div>
```

<h3>Autocomplete
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>Autocomplete is best used for form fields that have a set finite list of acceptable values, and with a large-sized data list (dozens to hundreds). It's ideally used for questions for which the user would inheritly or intuitively know an answer for. It's not ideal for highly specific questions that need options displayed or explained. <span class="text-info">~Needs an ```.iconSearch``` added to right side to indicate that there is a dropdown after typing. Also needs minor tweak to position of dropdown~</span></p>

```js
<template>
  <b-container class="containsRowItems" fluid>

    <b-row>
      <b-col cols="6" class="form-label-group ui-widget">
        <b-form-input autocomplete="off" id="form-field-1" class="form-control" placeholder="Favourite Fruit (Required)"/>
        <label for="form-field-1">Favourite Fruit</label>
      </b-col>

  </b-container>
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


</docs>

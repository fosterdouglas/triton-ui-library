<docs>

<h3>Breadcrumb</h3>
<p>A wayfinding function to help the user understand where in the file or page hierarchy the current page lives.</p>

```js
<template>
  <div>

    <b-breadcrumb :items="items"></b-breadcrumb>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Sample Agency',
            href: '#'
          },
          {
            text: 'Sample Client',
            href: '#'
          },
          {
            text: 'Current Client or User',
            active: true
          }
        ]
      }
    }
  }
</script>
```

</docs>

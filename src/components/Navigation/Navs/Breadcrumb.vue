<docs>

<h3>Breadcrumb</h3>

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

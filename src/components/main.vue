<template>
  <div>
    <p>Hola mundo</p>
  </div>
</template>

<script>
import Client from 'belvo';

export default {
  name: 'Main',
};

const client = new Client(
  '3fa922fb-40ba-4a80-a32e-6522b32f54e5',
  '0i8127-*wzN1ZGNl89*Q80xYCR_JCob8k5IRn99MpZz37GNAYBZkURWe2Y4zax4_',
  'https://sandbox.belvo.com',
);

async function getLinks() {
  try {
    const links = await client.links.list();
    console.log(links);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style>
</style>

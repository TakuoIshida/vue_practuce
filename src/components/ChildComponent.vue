<template>
    <div>
        {{ name }}
    </div>
</template>
<script>
export default {
    props: {
        'name': name,
        'resetName': Function,
    }
}
</script>
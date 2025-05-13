<template>
    <form class="form-container">
        <slot name="form-content"></slot>
    </form>
</template>

<style>
.form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    font-size: 20px;
}
</style>
"use strict";

  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        imageSrc: "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }
  }).mount('#app')

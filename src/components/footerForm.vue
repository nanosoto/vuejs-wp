<template>
  <div class="footer__contact">
      <h1 class="contact__title">¿No encuentras lo que buscas?</h1>
      <p class="contact__description">Rellena el siguiente formulario y cuéntanos qué es lo que necesitas y cómo podemos ayudarte, o si lo prefieres, puedes escribirnos un correo a <a href="mailto:marketing@cic.es">marketing@cic.es</a> o <a href="mailto:diseno@cic.es">diseno@cic.es</a></p>
      <div class="contact__form">
          <div class="form-group contact__nombre">
              <div class="form-group__label">Nombre y apellidos</div>
               <input class="form-group__input" type="text" name="firstname" placeholder="Nombre y apellidos">
              <div class="form-group__helper-text">*Helper text</div>
          </div>
          <div class="form-group contact__email">
              <div class="form-group__label">Email</div>
               <input class="form-group__input" type="text" name="firstname" placeholder="Email">
              <div class="form-group__helper-text"></div>
          </div>
          <div class="form-group form-group-textarea contact__mensaje">
              <div class="form-group__label">Mensaje</div>
               <textarea class="form-group__input form-group__textarea" placeholder="Escribe aquí tu mensaje"></textarea>
              <div class="form-group__helper-text"></div>
          </div>
          <button class="btn contact__button">
              enviar mensaje
              <img class="btn__icon" src="../assets/send.svg">
          </button>
      </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer__contact {
    .contact__title {
      font-size: calc(var(--font-size-base) * 2.6);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
</style>

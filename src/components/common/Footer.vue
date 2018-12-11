<template>
  <div class="footer">
    <div class="section">
      <div>Информация</div>
      <a href="#">О магазине</a>
      <a href="#">Оплата и доставка</a>
      <a href="#">Политика Безопасности</a>
      <a href="#">Условия соглашения</a>
    </div>
    <div class="section">
      <div>Служба поддержки</div>
      <a href="#">Связаться с нами</a>
      <a href="#">Возврат товара</a>
      <a href="#">Карта сайта</a>
    </div>
    <div class="section">
      <div>Дополнительно</div>
      <a href="#">Производители</a>
      <a href="#">Подарочные сертификаты</a>
      <a href="#">Партнёры</a>
      <a href="#">Товары со скидкой</a>
    </div>
    <div class="section">
      <div>Личный кабинет</div>
      <a href="#">Личный кабинет</a>
      <a href="#">История заказов</a>
      <a href="#">Мои закладки</a>
      <a href="#">Рассылка новостей</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background: #333;
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

.section {
  color: #fff;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 14px;
  margin-right: 100px;

  &:last-child {
    margin: 0;
  }

  div {
    border-bottom: 1px solid #666;
    font-weight: 600;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  a {
    color: #aaa;
    font-size: 12px;
    line-height: 20px;
    text-decoration: none;
  }
}
</style>
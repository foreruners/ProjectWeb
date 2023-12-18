<template>
  
  <div class="contact-header text-white text-center">
  </div>
<div class="contact-main container">
  <div class="contact-main container mt-4">

    <div class="row justify-content-around">
      
      <div class="contact-form col-12 col-md-5 mb-4 d-flex flex-column justify-content-around">
        <h2>Contact Form</h2>
        <form class="d-flex flex-column flex-grow-1">
          <div class="mb-3 flex-grow-1">
            <input type="text" placeholder="Name" id="name" name="name" class="form-control" required>
          </div>
          <div class="mb-3 flex-grow-1">
            <input type="text" placeholder="Company" id="company" name="company" class="form-control">
          </div>
          <div class="mb-3 flex-grow-1">
            <input type="email" placeholder="Email" id="email" name="email" class="form-control" required>
          </div>
          <div class="mb-3 flex-grow-1">
            <textarea id="message" placeholder="Your message" name="message" class="form-control" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary flex-grow-1">Send</button>
        </form>
      </div>

      <div class="contact-info col-12 col-md-5 mb-4">
        <h2>Contact Information</h2>
        <p>Man Boutique</p>
        <p>Email: manboutique@email.com</p>
        <p>Phone: +1 234 567 890</p>

        <div class="map mt-4">

            <iframe class="w-100 h-100" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12004.560289116147!2d-8.69399298809812!3d41.21871790329745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2468ec3655d101%3A0x12cab54b20119109!2sATEC%20-%20Academia%20de%20Forma%C3%A7%C3%A3o%20(Matosinhos)!5e0!3m2!1spt-PT!2spt!4v1702705714927!5m2!1spt-PT!2spt"
            style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>
    </div>
  </div>

  <div class="assistant-cards row mt-4 justify-content-around">
    <div class="assistant-card col-12 col-md-5 mb-4">
      <img src="../imgs/Assistent-1.png" alt="Assistant 1" class="assistant-image">
      <h4>Americo Amorim</h4>
      <p>Americo se destaca em comunicação e atendimento ao cliente. Ele é proativo e sempre procura oferecer soluções rápidas e eficazes.</p>
      <p>Email: americoamorim@email.com</p>
      <p>Phone: +1 234 567 891</p>
    </div>

    <div class="assistant-card col-12 col-md-5 mb-4">
      <img src="../imgs/Assistent-2.png" alt="Assistant 2" class="assistant-image">
      <h4>Francisca Azevedo</h4>
      <p>Francisca é conhecida por sua eficiência e cordialidade. Ela adora resolver problemas e garantir que todas as interações sejam positivas.</p>
      <p>Email: franciscaazevedo@email.com</p>
      <p>Phone: +1 234 567 891</p>
    </div>
  </div>
</div>
</template>

<style scoped>
.contact-header {
background-image: url('../imgs/TopContact.png');
background-size: cover;
background-position: center;
color: white;
text-align: center;
padding: 20px;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
}

.contact-main {
padding: 20px;
}

.contact-form form {
display: flex;
flex-direction: column;
}

.contact-form label {
margin-bottom: 8px;
}

.map {
height: 300px;
margin-top: 20px;
}

.assistant-cards {
margin: 20px;
}

.assistant-card {
border: 1px solid #ccc;
padding: 20px;
box-sizing: border-box;
}

.assistant-card .assistant-image {
width: 150px;
height: 150px;
border-radius: 50%;
display: block;
margin: 0 auto 10px;
}

.assistant-card h4 {
text-align: center; 
margin-bottom: 5px;
}

.assistant-card p {
text-align: center;
}

@media (max-width: 768px) {
.assistant-card .assistant-image {
  width: 100px;
  height: 100px;
}
}
</style>

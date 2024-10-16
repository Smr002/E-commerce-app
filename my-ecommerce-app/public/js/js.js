function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

document.addEventListener('DOMContentLoaded', function() {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        autoplay:1500,
        breakpoints: {
            1024: {
                perView: 3
            },
            768: {
                perView: 2
            },
            480: {
                perView: 1
            }
        }
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1200,
        once: true, // Animation happens only once while scrolling
        easing: 'ease'
    });
});



function toggleMenu() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('myVideo');
  
  
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
  });

  setTimeout(function () {
    // Trigger the logo move animation
    const logo = document.getElementById('logo');
    logo.style.animation = 'moveLogo 1s forwards';
    document.getElementById('splash-screen').style.opacity = '0';

    // Wait for the animation to finish
    setTimeout(function () {
        // Hide the splash screen
        document.getElementById('splash-screen').style.display = 'none';

        // Show the main content
        document.getElementById('main-content').style.display = 'block';


        // Show the logo in the header with a fade-in effect
        const headerLogo = document.getElementById('header-logo');
        headerLogo.style.opacity = '1';
        
    }, 1000); // Wait for 1 second for the animation to complete
}, 700);

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const logo = document.querySelector('.footer-section.logo img');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = "../index.html";

        });
    }

    const logo1 = document.querySelector('.logo img');
    if (logo1) {
        logo1.addEventListener('click', () => {
            window.location.href = "../index.html";

        });
    }

   
});


function sendWhatsAppMessage() {
    // Open the order modal when the WhatsApp button is clicked
    var orderModal = new bootstrap.Modal(document.getElementById('orderModal'), {
        backdrop: 'static',  // Ensure the modal cannot be dismissed by clicking outside
        keyboard: false      // Disable closing the modal by pressing 'Esc'
    });
    orderModal.show();
}

function proceedOrder() {
    const { jsPDF } = window.jspdf;
    
    // Create a new jsPDF document
    const doc = new jsPDF();

    // Gather the user information
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const productName = document.getElementById("product-name").innerText;
    const productPrice = document.getElementById("product-price").innerText;

    // Check if all required fields are filled
    if (!name || !surname || !phone || !address) {
        alert("Ju lutemi plotësoni të gjitha fushat për të vazhduar.");
        return;
    }

    // Set a title for the document
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Order Confirmation", 105, 20, null, null, 'center'); // Centered title

    // Add a separator line
    doc.setLineWidth(0.5);
    doc.line(15, 25, 195, 25); // Horizontal line

    // Order Details Header
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Order Details For AKB-STORE", 15, 35);

    // Order Information in a table-like structure
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // Add Name
    doc.text("Name:", 15, 45);
    doc.text(`${name} ${surname}`, 45, 45);

    // Add Phone
    doc.text("Phone:", 15, 55);
    doc.text(`${phone}`, 45, 55);

    // Add Address
    doc.text("Address:", 15, 65);
    doc.text(`${address}`, 45, 65);

    // Add Product Name
    doc.text("Product:", 15, 75);
    doc.text(`${productName}`, 45, 75);

    // Add Product Price
    doc.text("Price:", 15, 85);
    doc.text(`${productPrice}`, 45, 85);

    // Add separator line below product details
    doc.line(15, 90, 195, 90);

    // Footer - Thank You Note
    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.text("Thank you for your order! We will contact you shortly.", 15, 105);

    // Save the PDF file locally for the user
    const pdfFileName = `${name}_OrderDetails.pdf`;
    doc.save(pdfFileName);

    // You need to upload this file manually to Dropbox or any other file-sharing service
    // Once uploaded, copy the public link to that file
    const pdfShareableLink = "https://www.dropbox.com/s/sample_uploaded_pdf_file.pdf?dl=0"; // Placeholder, replace this manually

    // Create a professional WhatsApp message in Albanian for the seller
    const message = 
    `*Konfirmim Porosie*\n\n` +
    `Përshëndetje,\n\n` +
    `Dëshiroj të porosis nje produkte me   detajet e mëposhtme:\n\n` +

    `*Informacioni i Klientit:*\n` +
    `• *Emri:* ${name} ${surname}\n` +
    `• *Numri i telefonit:* ${phone}\n` +
    `• *Adresa:* ${address}\n\n` +

    `*Detajet e Porosisë:*\n` +
    `• *Produkti:* ${productName}\n` +
    `• *Çmimi:* ${productPrice}\n\n` +

    `Një faturë e detajuar e porosisë është gjeneruar në format PDF.\n` +
    `Mund ta shkarkoni duke përdorur lidhjen më poshtë:\n\n` +
    `📎 ${pdfShareableLink}\n\n` +  // Include the PDF link here
    `Faleminderit për vëmendjen tuaj.\n\n` +
    `Me respekt,\n` +
    `${name} ${surname}`;

    // WhatsApp API link (format)
    const whatsappUrl = `https://wa.me/355693225557?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the message containing the PDF link
    window.open(whatsappUrl, '_blank');
}




document.addEventListener('DOMContentLoaded', function () {
    new Glide('.custom-carousel', {
      type: 'carousel',
      perView: 8,  // 8 products per view by default
      breakpoints: {
        1024: {
          perView: 6,  // 6 products on medium screens
        },
        768: {
          perView: 4,  // 4 products on small tablets
        },
        480: {
          perView: 2,  // 2 products on mobile
        }
      },
      gap: 20, // Space between items
    }).mount();
  });
  







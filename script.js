const dict = {
    ru: {
        lang_ru: "Русский", lang_en: "English", lang_it: "Italiano", lang_de: "Deutsch", lang_fr: "Français",
        nav_about: "О нас", nav_blog: "Блог", nav_order: "Бронь", nav_contacts: "Контакты",
        btn_about: "О Нас", btn_book: "Забронировать",
        footer_text: "[ Место для лицензионного соглашения и политики конфиденциальности ]",
        info_title: "Информация",
        desc_main: "Добро пожаловать в RIKHELAN HAUS — место, где время замедляет свой бег. Мы создали для вас пространство, вдохновленное красотой природы и благородством натурального дерева. Наш отель идеально подходит для тех, кто ищет уединение и высокий уровень сервиса. Наслаждайтесь тишиной, изысканными интерьерами и атмосферой абсолютного спокойствия.",
        story_1_img: "[ Фото 1: Наша история ]", story_1_txt: "Отель RIKHELAN HAUS зародился как семейная усадьба. Мы стремились сохранить первозданную эстетику природы, перенеся её тепло в архитектуру. Каждый элемент интерьера выполнен вручную.",
        story_2_img: "[ Фото 2: Архитектура ]", story_2_txt: "Архитектурное решение гармонично сочетает стиль шале и эко-минимализм. Панорамные окна впускают свет, подчеркивая рисунок древесины и создавая ощущение единения с пейзажем.",
        story_3_img: "[ Фото 3: Атмосфера ]", story_3_txt: "Особое внимание уделено уюту. Вечером мягкое освещение и треск камина переносят в мир вдали от суеты. Запах натуральной смолы способствует глубокой релаксации.",
        story_4_img: "[ Фото 4: Гастрономия ]", story_4_txt: "Наш ресторан предлагает блюда из локальных фермерских продуктов. Шеф-повар сочетает старинные рецепты с современными трендами.",
        story_5_img: "[ Фото 5: Философия ]", story_5_txt: "Философия отеля — бережное отношение к природе. Мы минимизируем пластик, внедряем эко-технологии и создаем пространство для восстановления баланса сил.",
        blog_title: "Блог", services_title: "Услуги отеля",
        srv_spa_t: "SPA & Релаксация", srv_spa_d: "Финская сауна, баня на дровах и гидромассажные ванны с видом на лес.",
        srv_rest_t: "Ресторан авторской кухни", srv_rest_d: "Завтраки шведский стол и изысканные ужины a-la carte из дичи и лесных грибов.",
        srv_eco_t: "Прокат и экскурсии", srv_eco_d: "Прокат велосипедов летом и лыж зимой. Организация пеших туров.",
        srv_conc_t: "Консьерж-сервис 24/7", srv_conc_d: "Заказ трансфера, доставка цветов или романтический ужин в номер.",
        order_title: "RIKHELAN H·A·U·S",
        rm_1_p: "[ Фото: Стандарт ]", rm_1_t: "Лесной Стандарт", rm_1_d: "Уютный номер со светлым деревом и панорамным окном на сосновый бор.",
        rm_2_p: "[ Фото: Полулюкс ]", rm_2_t: "Комфорт Люкс", rm_2_d: "Просторный номер с личным камином, балконом и гидромассажной ванной.",
        rm_3_p: "[ Фото: Шале ]", rm_3_t: "Семейное Шале", rm_3_d: "Двухэтажный коттедж. Две спальни, кухня и терраса с зоной барбекю.",
        bk_room: "Выберите номер", bk_g: "Количество гостей", bk_in: "Дата заезда", bk_out: "Дата выезда",
        address_text: "RIKHELAN 33020 SAURIS DI SOPRA"
    },
    en: {
        lang_ru: "Русский", lang_en: "English", lang_it: "Italiano", lang_de: "Deutsch", lang_fr: "Français",
        nav_about: "About Us", nav_blog: "Blog", nav_order: "Booking", nav_contacts: "Contacts",
        btn_about: "About Us", btn_book: "Book Now",
        footer_text: "[ License agreement and privacy policy ]",
        info_title: "Information",
        desc_main: "Welcome to RIKHELAN HAUS — a place where time slows down. We have created a space inspired by the beauty of nature and natural wood. Perfect for those seeking privacy and high service.",
        story_1_img: "[ Photo 1: Our Story ]", story_1_txt: "RIKHELAN HAUS originated as a family estate. We sought to preserve the aesthetics of nature. Each interior element is handcrafted.",
        story_2_img: "[ Photo 2: Architecture ]", story_2_txt: "The architecture combines chalet style and eco-minimalism. Panoramic windows let in light, highlighting the wood pattern.",
        story_3_img: "[ Photo 3: Atmosphere ]", story_3_txt: "Soft lighting and the crackling of the fireplace transport you far from the city bustle. The smell of pine promotes relaxation.",
        story_4_img: "[ Photo 4: Gastronomy ]", story_4_txt: "Our restaurant offers dishes from local farm products, combining old recipes with modern trends.",
        story_5_img: "[ Photo 5: Philosophy ]", story_5_txt: "Our philosophy is caring for nature. We use eco-technologies to create a space for restoring your balance.",
        blog_title: "Blog", services_title: "Hotel Services",
        srv_spa_t: "SPA & Relaxation", srv_spa_d: "Finnish sauna, wood-fired bath, and hydromassage baths overlooking the forest.",
        srv_rest_t: "Author's Cuisine", srv_rest_d: "Buffet breakfasts and exquisite a-la carte dinners featuring game and wild mushrooms.",
        srv_eco_t: "Rentals & Tours", srv_eco_d: "Bicycle rental in summer, skis in winter, and organized hiking tours.",
        srv_conc_t: "24/7 Concierge", srv_conc_d: "Transfers, flower delivery, or romantic dinners in your room.",
        order_title: "RIKHELAN H·A·U·S",
        rm_1_p: "[ Photo: Standard ]", rm_1_t: "Forest Standard", rm_1_d: "Cozy room with light wood and a panoramic window overlooking the pine forest.",
        rm_2_p: "[ Photo: Junior Suite ]", rm_2_t: "Comfort Suite", rm_2_d: "Spacious room with a private fireplace, balcony, and hydromassage bath.",
        rm_3_p: "[ Photo: Chalet ]", rm_3_t: "Family Chalet", rm_3_d: "Two-story cottage. Two bedrooms, a kitchen, and a terrace with a BBQ area.",
        bk_room: "Choose a room", bk_g: "Guests", bk_in: "Check-in", bk_out: "Check-out",
        address_text: "RIKHELAN 33020 SAURIS DI SOPRA"
    },
    it: {
        lang_ru: "Русский", lang_en: "English", lang_it: "Italiano", lang_de: "Deutsch", lang_fr: "Français",
        nav_about: "Chi Siamo", nav_blog: "Blog", nav_order: "Prenota", nav_contacts: "Contatti",
        btn_about: "Chi Siamo", btn_book: "Prenota Ora",
        footer_text: "[ Accordo di licenza e politica sulla privacy ]",
        info_title: "Informazioni",
        desc_main: "Benvenuti al RIKHELAN HAUS — un luogo dove il tempo rallenta. Abbiamo creato uno spazio ispirato alla bellezza della natura e del legno naturale.",
        story_1_img: "[ Foto 1: La Nostra Storia ]", story_1_txt: "RIKHELAN HAUS nasce come tenuta di famiglia. Abbiamo cercato di preservare l'estetica della natura. Ogni elemento è fatto a mano.",
        story_2_img: "[ Foto 2: Architettura ]", story_2_txt: "L'architettura unisce lo stile chalet e l'eco-minimalismo. Le ampie finestre evidenziano il motivo del legno.",
        story_3_img: "[ Foto 3: Atmosfera ]", story_3_txt: "Le luci soffuse e il caminetto ti trasportano lontano dal caos. L'odore del pino favorisce il relax.",
        story_4_img: "[ Foto 4: Gastronomia ]", story_4_txt: "Il nostro ristorante offre piatti con prodotti locali, unendo ricette antiche a tendenze moderne.",
        story_5_img: "[ Foto 5: Filosofia ]", story_5_txt: "La nostra filosofia è il rispetto della natura. Usiamo eco-tecnologie per ripristinare il tuo equilibrio.",
        blog_title: "Blog", services_title: "Servizi dell'Hotel",
        srv_spa_t: "SPA & Relax", srv_spa_d: "Sauna finlandese, bagno a legna e vasche idromassaggio con vista bosco.",
        srv_rest_t: "Cucina d'Autore", srv_rest_d: "Colazione a buffet e cene a-la-carte con selvaggina e funghi.",
        srv_eco_t: "Noleggio & Tour", srv_eco_d: "Bici in estate, sci in inverno e tour guidati a piedi.",
        srv_conc_t: "Concierge 24/7", srv_conc_d: "Trasferimenti, fiori o cene romantiche in camera.",
        order_title: "RIKHELAN H·A·U·S",
        rm_1_p: "[ Foto: Standard ]", rm_1_t: "Standard Foresta", rm_1_d: "Camera accogliente in legno chiaro con finestra panoramica sulla pineta.",
        rm_2_p: "[ Foto: Suite ]", rm_2_t: "Suite Comfort", rm_2_d: "Camera spaziosa con camino privato, balcone e vasca idromassaggio.",
        rm_3_p: "[ Foto: Chalet ]", rm_3_t: "Chalet Familiare", rm_3_d: "Cottage su due piani. Due camere, cucina e terrazza con area BBQ.",
        bk_room: "Scegli la camera", bk_g: "Ospiti", bk_in: "Arrivo", bk_out: "Partenza",
        address_text: "RIKHELAN 33020 SAURIS DI SOPRA"
    },
    de: {
        lang_ru: "Русский", lang_en: "English", lang_it: "Italiano", lang_de: "Deutsch", lang_fr: "Français",
        nav_about: "Über uns", nav_blog: "Blog", nav_order: "Buchen", nav_contacts: "Kontakt",
        btn_about: "Über uns", btn_book: "Jetzt Buchen",
        footer_text: "[ Lizenzvereinbarung und Datenschutzrichtlinie ]",
        info_title: "Informationen",
        desc_main: "Willkommen im RIKHELAN HAUS — ein Ort, an dem die Zeit langsamer wird. Perfekt für diejenigen, die Privatsphäre und hohen Service suchen.",
        story_1_img: "[ Foto 1: Unsere Geschichte ]", story_1_txt: "RIKHELAN HAUS entstand als Familiengut. Jedes Interieur-Element ist handgefertigt.",
        story_2_img: "[ Foto 2: Architektur ]", story_2_txt: "Die Architektur verbindet Chalet-Stil und Öko-Minimalismus. Panoramafenster betonen das Holzmuster.",
        story_3_img: "[ Foto 3: Atmosphäre ]", story_3_txt: "Sanfte Beleuchtung und das Knistern des Kamins entführen Sie weit weg von der Hektik.",
        story_4_img: "[ Foto 4: Gastronomie ]", story_4_txt: "Unser Restaurant bietet Gerichte aus lokalen Bauernprodukten an.",
        story_5_img: "[ Foto 5: Philosophie ]", story_5_txt: "Unsere Philosophie ist der Respekt vor der Natur mit umweltfreundlichen Technologien.",
        blog_title: "Blog", services_title: "Hotelservices",
        srv_spa_t: "SPA & Entspannung", srv_spa_d: "Finnische Sauna, holzbefeuerte Badewanne und Hydromassage mit Waldblick.",
        srv_rest_t: "Autorenküche", srv_rest_d: "Frühstücksbuffet und exquisite A-la-carte-Abendessen.",
        srv_eco_t: "Verleih & Touren", srv_eco_d: "Fahrradverleih im Sommer, Skier im Winter und geführte Wandertouren.",
        srv_conc_t: "24/7 Concierge", srv_conc_d: "Transfers, Blumenlieferung oder romantische Abendessen auf dem Zimmer.",
        order_title: "RIKHELAN H·A·U·S",
        rm_1_p: "[ Foto: Standard ]", rm_1_t: "Wald Standard", rm_1_d: "Gemütliches Zimmer aus hellem Holz mit Panoramablick auf den Kiefernwald.",
        rm_2_p: "[ Foto: Suite ]", rm_2_t: "Komfort Suite", rm_2_d: "Geräumiges Zimmer mit eigenem Kamin, Balkon und Hydromassage-Badewanne.",
        rm_3_p: "[ Foto: Chalet ]", rm_3_t: "Familien-Chalet", rm_3_d: "Zweistöckiges Cottage. Zwei Schlafzimmer, Küche und Terrasse mit Grill.",
        bk_room: "Zimmer wählen", bk_g: "Gäste", bk_in: "Check-in", bk_out: "Check-out",
        address_text: "RIKHELAN 33020 SAURIS DI SOPRA"
    },
    fr: {
        lang_ru: "Русский", lang_en: "English", lang_it: "Italiano", lang_de: "Deutsch", lang_fr: "Français",
        nav_about: "À propos", nav_blog: "Blog", nav_order: "Réserver", nav_contacts: "Contacts",
        btn_about: "À propos", btn_book: "Réserver",
        footer_text: "[ Accord de licence et politique de confidentialité ]",
        info_title: "Informations",
        desc_main: "Bienvenue au RIKHELAN HAUS — un lieu où le temps ralentit. Un espace inspiré par la beauté de la nature et du bois naturel.",
        story_1_img: "[ Photo 1: Notre Histoire ]", story_1_txt: "RIKHELAN HAUS a vu le jour comme domaine familial. Chaque élément est fabriqué à la main.",
        story_2_img: "[ Photo 2: Architecture ]", story_2_txt: "L'architecture allie le style chalet et l'éco-minimalisme. Les fenêtres panoramiques soulignent le bois.",
        story_3_img: "[ Photo 3: Atmosphère ]", story_3_txt: "L'éclairage doux et le crépitement de la cheminée vous transportent loin de l'agitation.",
        story_4_img: "[ Photo 4: Gastronomie ]", story_4_txt: "Notre restaurant propose des plats à base de produits locaux.",
        story_5_img: "[ Photo 5: Philosophie ]", story_5_txt: "Notre philosophie est le respect de la nature avec des technologies écologiques.",
        blog_title: "Blog", services_title: "Services de l'Hôtel",
        srv_spa_t: "SPA & Détente", srv_spa_d: "Sauna finlandais, bain au feu de bois et hydromassage avec vue sur la forêt.",
        srv_rest_t: "Cuisine d'Auteur", srv_rest_d: "Petits déjeuners buffet et dîners exquis à la carte.",
        srv_eco_t: "Location & Tours", srv_eco_d: "Vélos en été, skis en hiver et randonnées organisées.",
        srv_conc_t: "Concierge 24/7", srv_conc_d: "Transferts, livraison de fleurs ou dîners romantiques en chambre.",
        order_title: "RIKHELAN H·A·U·S",
        rm_1_p: "[ Photo: Standard ]", rm_1_t: "Standard Forêt", rm_1_d: "Chambre confortable en bois clair avec fenêtre panoramique sur la pinède.",
        rm_2_p: "[ Photo: Suite ]", rm_2_t: "Suite Confort", rm_2_d: "Chambre spacieuse avec cheminée privée, balcon et baignoire hydromassage.",
        rm_3_p: "[ Photo: Chalet ]", rm_3_t: "Chalet Familial", rm_3_d: "Cottage à deux étages. Deux chambres, cuisine et terrasse avec barbecue.",
        bk_room: "Choisir une chambre", bk_g: "Invités", bk_in: "Arrivée", bk_out: "Départ",
        address_text: "RIKHELAN 33020 SAURIS DI SOPRA"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Инициализация языка
    const currentLang = localStorage.getItem('hotel_lang') || 'ru';
    applyLanguage(currentLang);

    // 2. Логика кастомных выпадающих списков (Dropdowns)
    document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
        const selected = dropdown.querySelector('.dropdown-selected');
        const options = dropdown.querySelectorAll('.dropdown-option');
        const span = selected.querySelector('span');
        const hiddenInput = dropdown.querySelector('input[type="hidden"]'); // Для страницы брони

        selected.addEventListener('click', (e) => {
            e.stopPropagation();
            // Закрываем другие открытые списки
            document.querySelectorAll('.custom-dropdown').forEach(d => { if(d !== dropdown) d.classList.remove('open'); });
            dropdown.classList.toggle('open');
        });

        options.forEach(opt => {
            opt.addEventListener('click', () => {
                const value = opt.getAttribute('data-value');
                const i18nKey = opt.getAttribute('data-i18n');
                
                if(hiddenInput) hiddenInput.value = value;
                span.setAttribute('data-i18n', i18nKey);
                span.innerText = dict[localStorage.getItem('hotel_lang') || 'ru'][i18nKey];

                if(dropdown.classList.contains('lang-switch')) applyLanguage(value);
                dropdown.classList.remove('open');
            });
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.custom-dropdown').forEach(d => d.classList.remove('open'));
    });

  // 3. Галерея для блога
    const blogGrid = document.querySelector('.blog-grid');
    if(blogGrid) {
        // Сюда впиши пути к твоим 20 фотографиям
        const blogPhotos = [
            "images/blog-1.jpg", "images/blog-2.jpg", "images/blog-3.jpg", "images/blog-4.jpg",
            "images/blog-5.jpg", "images/blog-6.jpg", "images/blog-7.jpg", "images/blog-8.jpg",
            "images/blog-9.jpg", "images/blog-10.jpg", "images/blog-11.jpg", "images/blog-12.jpg",
            "images/blog-13.jpg", "images/blog-14.jpg", "images/blog-15.jpg", "images/blog-16.jpg",
            "images/blog-17.jpg", "images/blog-18.jpg", "images/blog-19.jpg", "images/blog-20.jpg"
        ];

        blogPhotos.forEach(photoSrc => {
            blogGrid.innerHTML += `
                <div class="blog-item" style="background-image: url('${photoSrc}'); background-size: cover; background-position: center;" data-full="${photoSrc}">
                </div>
            `;
        });

        // Модальное окно галереи
        const modal = document.getElementById('galleryModal');
        document.querySelectorAll('.blog-item').forEach(item => {
            item.addEventListener('click', () => {
                document.getElementById('modalImg').src = item.getAttribute('data-full');
                modal.style.display = 'flex';
            });
        });
        document.getElementById('modalClose').onclick = () => modal.style.display = 'none';
        modal.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; };
    }
    // 4. Аккордеон услуг (About Us)
    document.querySelectorAll('.service-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.service-content');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.service-item').forEach(el => {
                el.classList.remove('active'); el.querySelector('.service-content').style.maxHeight = null;
            });
            if (!isActive) {
                item.classList.add('active'); content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

function applyLanguage(lang) {
    localStorage.setItem('hotel_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[lang] && dict[lang][key]) {
            el.innerText = dict[lang][key];
        }
    });
}
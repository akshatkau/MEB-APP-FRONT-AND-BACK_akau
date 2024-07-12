import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { debounce } from "lodash";

const BlogScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title:
        "We for Wellness, I for Illness: The Collective Wisdom of Ayurveda",
      content: [
        {
          type: "text",
          text: "",
        },
        //{ type: "image", src: require("../assets/content_1.7.webp") },
        {
          type: "text",
          text: 'Ayurveda, the ancient science of life, holds profound insights into the interconnectedness of human health and the environment. One of its core philosophies is encapsulated in the saying, "We for wellness, I for illness." This concept highlights the collective nature of our existence and health, urging us to recognize that we are not isolated individuals but complex ecosystems. This holistic perspective has significant implications for understanding and maintaining health.',
        },
        { type: "subtitle", text: "The Collective Human Ecosystem" },
        { type: "image", src: require("../assets/content_1.2.jpg") },
        {
          type: "text",
          text: "While we often perceive ourselves as individual entities, Ayurveda encourages us to see beyond this illusion. Our bodies are composed of approximately 37.2 trillion cells, all sharing the same genome, yet performing a multitude of functions. Beyond our own cells, our gastrointestinal tract alone harbors around 10^13 microbes, including bacteria, viruses, and fungi. This microbiome plays a crucial role in our digestion, immunity, and overall health.",
        },
        {
          type: "text",
          text: 'Ayurveda\'s ancient texts, written long before the advent of modern microbiology, reflect a deep understanding of this interconnectedness. The concept of "We for wellness" acknowledges that maintaining harmony within this vast community of cells and microbes is essential for our health.',
        },
        {
          type: "subtitle",
          text: "The Principle of Doshas and Collective Balance",
        },
        { type: "image", src: require("../assets/content_1.3.jpg") },
        {
          type: "text",
          text: 'Central to Ayurveda is the concept of the three doshas—Vata, Pitta, and Kapha—bio-energetic forces that govern physiological and psychological processes. These doshas must remain in balance for optimal health. When viewed through the lens of "We for wellness," this balance extends beyond individual organs or systems to include the harmonious interaction of all cells and microorganisms within the body.',
        },
        {
          type: "list",
          items: [
            "Vata (Air and Ether): Governs movement and communication within the body. Balanced Vata ensures efficient neural, circulatory, and microbial signaling.",
            "Pitta (Fire and Water): Manages transformation, including metabolism and digestion. Balanced Pitta facilitates proper nutrient absorption and microbial function.",
            "Kapha (Earth and Water): Provides structure and cohesion. Balanced Kapha supports cellular integrity and microbial colonization.",
          ],
        },
        { type: "subtitle", text: "The Microbiome: Guardians of Health" },
        { type: "image", src: require("../assets/content_1.4.jpg") },
        {
          type: "text",
          text: "Modern science increasingly validates Ayurveda's holistic approach, especially concerning the gut microbiome. The gut microbiome is integral to digestion, nutrient absorption, immune function, and even mental health. Ayurveda's emphasis on diet, lifestyle, and herbal treatments can significantly influence the health of our microbiome.",
        },
        {
          type: "list",
          items: [
            "Diet: Ayurvedic dietary recommendations, tailored to an individual's doshic balance, promote the consumption of foods that support microbial diversity and function.",
            "Lifestyle: Daily routines (dinacharya) and seasonal practices (ritucharya) help maintain the rhythm and balance of our body's internal ecosystem.",
            "Herbs and Probiotics: Ayurvedic herbs and fermented foods act as prebiotics and probiotics, nurturing beneficial microbes.",
          ],
        },
        { type: "subtitle", text: 'The Disconnect of "I for Illness"' },
        {
          type: "text",
          text: "When we view ourselves as isolated individuals we ignore the intricate web of interactions within us. This fragmented perspective can lead to lifestyle choices and medical practices that disrupt our internal harmony. For example, poor diet, stress, and overuse of antibiotics can harm our microbiome, leading to a cascade of health issues.",
        },
        {
          type: "text",
          text: 'Ayurveda teaches that illness arises from imbalances within the body\'s systems and its environment. By focusing on "I" rather than "We," we overlook the collective needs of our cells and microbes, resulting in disharmony and disease.',
        },
        { type: "subtitle", text: 'Embracing "We for Wellness"' },
        { type: "image", src: require("../assets/content_1.5.jpg") },
        {
          type: "text",
          text: "To achieve true wellness, Ayurveda advocates for practices that honor our collective nature. Here are some practical steps:",
        },
        {
          type: "list",
          items: [
            "Holistic Diet: Follow a diet that suits your doshic balance, incorporating a variety of whole foods that nourish both you and your microbiome.",
            "Mindful Living: Adopt routines that promote balance and regularity, such as consistent meal times, adequate sleep, and stress-reducing practices like yoga and meditation.",
            "Natural Remedies: Use Ayurvedic herbs and treatments to support your body’s natural processes and microbial health.",
            "Community and Connection: Recognize the importance of social connections and community support in maintaining overall well-being.",
          ],
        },
        { type: "subtitle", text: "Conclusion" },
        { type: "image", src: require("../assets/content_1.6.jpg") },
        {
          type: "text",
          text: 'Ayurveda\'s wisdom, encapsulated in the phrase "We for wellness, I for illness," reminds us of the profound interconnectedness within our bodies. By acknowledging and nurturing this collective ecosystem, we can achieve holistic health and well-being. Embracing this ancient perspective offers timeless guidance for living in harmony with ourselves and the world around us.',
        },
        {
          type: "text",
          text: "The MyEasyPharma team",
        },
      ],
      image: require("../assets/blogs2.jpeg"),
    },
    {
      id: 2,
      title: "Ayurveda: Beyond Reductionist Science!",
      content: [
        {
          type: "text",
          text: "",
        },

        {
          type: "text",
          text: "Ayurveda, the ancient Indian system of medicine, offers a holistic approach to health that transcends the limitations of reductionist science. Unlike conventional medicine, which often focuses on isolating and treating specific symptoms or diseases, Ayurveda emphasizes the interconnectedness of the body, mind, and spirit. It considers health to be a dynamic state of balance and harmony within the individual and with the environment.",
        },
        { type: "subtitle", text: "The Holistic Foundation of Ayurveda" },
        { type: "image", src: require("../assets/content_2.2.jpeg") },
        {
          type: "text",
          text: 'Ayurveda, which translates to "the science of life," is based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit. Its primary focus is on promoting good health, rather than fighting disease. However, treatments may be recommended for specific health problems.',
        },
        {
          type: "text",
          text: "The holistic nature of Ayurveda is reflected in its foundational principles:",
        },
        {
          type: "list",
          items: [
            "The Five Elements (Panchamahabhutas): Ayurveda posits that the universe is composed of five elements—earth, water, fire, air, and ether. These elements combine in the human body to form three doshas: Vata (air and ether), Pitta (fire and water), and Kapha (earth and water). Each individual has a unique balance of these doshas, which determines their physical and mental characteristics and health tendencies.",
            "The Three Doshas: The balance of Vata, Pitta, and Kapha is crucial for health. Imbalances in these doshas can lead to illness. Ayurveda seeks to restore this balance through personalized treatments that may include diet, lifestyle changes, herbal remedies, and therapies such as massage and yoga.",
            "Prakriti (Constitution): Every individual has a unique constitution, or prakriti, determined by the proportions of the three doshas at the time of conception. Understanding an individual's prakriti helps Ayurvedic practitioners tailor treatments to their specific needs, promoting a personalized approach to health care.",
            "Vikriti (Imbalance): This refers to the current state of doshic imbalance in an individual. Treatment in Ayurveda aims to correct these imbalances, restoring harmony within the body.",
          ],
        },
        {
          type: "subtitle",
          text: "Beyond Symptoms: Treating the Root Cause",
        },
        { type: "image", src: require("../assets/content_2.3.jpg") },
        {
          type: "text",
          text: "One of the most significant differences between Ayurveda and reductionist science is Ayurveda's focus on the root cause of disease rather than just alleviating symptoms. For instance, rather than simply prescribing medication to lower blood pressure, an Ayurvedic practitioner might explore dietary habits, stress levels, lifestyle, and environmental factors to address the underlying causes.",
        },
        {
          type: "text",
          text: "This comprehensive approach can lead to more sustainable health improvements and can help prevent the recurrence of illness. By treating the individual as a whole, Ayurveda seeks to create a state of balance that supports long-term wellness.",
        },
        { type: "subtitle", text: "Integration of Mind, Body, and Spirit" },
        {
          type: "text",
          text: "Ayurveda recognizes the profound connection between the mind, body, and spirit. Mental and emotional states can significantly impact physical health, and vice versa. Practices such as yoga, meditation, and pranayama (breathing exercises) are integral to Ayurvedic treatment, helping to calm the mind, reduce stress, and promote overall well-being.",
        },
        {
          type: "text",
          text: "In this way, Ayurveda aligns with contemporary understandings of the psychosomatic nature of many diseases, where mental and emotional stress can manifest as physical illness.",
        },
        { type: "subtitle", text: "The Importance of Diet and Lifestyle" },
        { type: "image", src: require("../assets/content_2.4.jpg") },
        {
          type: "text",
          text: "Ayurveda places great emphasis on diet and lifestyle as central to health. Dietary recommendations are tailored to an individual's doshic balance, promoting foods that are most suitable for their unique constitution. Lifestyle recommendations might include daily routines (dinacharya) and seasonal routines (ritucharya) to align the individual's lifestyle with natural cycles.",
        },

        { type: "subtitle", text: "Scientific Validation and Integration" },
        {
          type: "text",
          text: "While Ayurveda is often seen as a traditional or alternative medicine, its principles and practices are increasingly being validated by modern scientific research. Studies have shown the benefits of various Ayurvedic herbs, such as turmeric and ashwagandha, and practices like yoga and meditation in managing chronic diseases, reducing stress, and improving overall health.",
        },
        {
          type: "text",
          text: "However, it is crucial to approach this integration thoughtfully. Ayurveda is not merely a collection of remedies to be extracted and applied in isolation; it is a cohesive system that works best when its holistic principles are respected and followed.",
        },
        { type: "subtitle", text: "Conclusion" },
        { type: "image", src: require("../assets/content_2.6.jpg") },
        {
          type: "text",
          text: 'Ayurveda\'s wisdom, encapsulated in the phrase "We for wellness, I for illness," reminds us of the profound interconnectedness within our bodies. By acknowledging and nurturing this collective ecosystem, we can achieve holistic health and well-being. Embracing this ancient perspective offers timeless guidance for living in harmony with ourselves and the world around us.',
        },
        {
          type: "text",
          text: "The MyEasyPharma team",
        },
      ],
      image: require("../assets/blog_2.1.jpg"),
    },
    {
      id: 3,
      title:
        "Understanding Prakriti in Ayurveda: The Blueprint of Individual Health",
      content: [
        //{ type: "image", src: require("../assets/content_3.3.jpg") },
        {
          type: "text",
          text: "Ayurveda, the ancient Indian system of medicine, emphasizes personalized health care through the concept of Prakriti. Derived from the Sanskrit words 'pra' (beginning) and 'kriti' (creation), Prakriti can be translated to 'natural constitution.' It represents an individual's unique physical, mental, and emotional makeup, formed at conception and influenced by genetic, environmental, and lifestyle factors.",
        },
        { type: "subtitle", text: "The Core of Ayurvedic Medicine" },
        {
          type: "text",
          text: "Prakriti is a central concept in Ayurveda, providing the foundation for diagnosis, treatment, and prevention of diseases. It is believed that understanding one's Prakriti can offer profound insights into their predispositions, health tendencies, and optimal lifestyle choices. This personalized approach contrasts with the one-size-fits-all model of conventional medicine, highlighting Ayurveda's holistic and individualized nature.",
        },
        { type: "subtitle", text: "The Three Doshas: Vata, Pitta, and Kapha" },
        {
          type: "text",
          text: "Prakriti is determined by the proportions of the three doshas—Vata, Pitta, and Kapha—at the time of conception. These doshas are bio-energetic forces derived from the five elements (earth, water, fire, air, and ether) and govern various physiological and psychological functions in the body.",
        },
        { type: "subtitle", text: "Vata (Air and Ether):" },
        {
          type: "list",
          items: [
            "Qualities: Dry, light, cold, rough, subtle, and mobile.",
            "Functions: Governs movement, including blood circulation, breathing, and the transmission of nerve impulses.",
            "Characteristics: Individuals with a predominant Vata constitution are often energetic, creative, and quick-thinking but may also be prone to anxiety, dryness,and irregularities in routine.",
          ],
        },
        { type: "subtitle", text: "Pitta (Fire and Water):" },
        {
          type: "list",
          items: [
            "Qualities: Hot, sharp, light, oily, and intense.",
            "Functions: Controls digestion, metabolism, and energy production.",
            "Characteristics: Those with a dominant Pitta constitution are typically determined, intelligent, and strong-willed, but may struggle with anger, irritability, and inflammatory conditions.",
          ],
        },
        { type: "subtitle", text: "Kapha (Earth and Water):" },
        {
          type: "list",
          items: [
            "Qualities: Heavy, slow, steady, solid, cold, and soft.",
            "Functions: Provides structure, stability, and lubrication to the body.",
            "Characteristics: Individuals with a Kapha-dominant constitution are often calm, compassionate, and grounded, yet they may be susceptible to lethargy, weight gain, and congestion.",
          ],
        },
        { type: "subtitle", text: "Assessing Prakriti" },
        { type: "image", src: require("../assets/content_3.1.jpg") },
        {
          type: "text",
          text: "Determining an individual's Prakriti involves a detailed evaluation by an Ayurvedic practitioner, including physical examination, assessment of mental and emotional characteristics, and consideration of lifestyle and environmental factors. This comprehensive analysis helps identify the predominant dosha(s) and their relative balance.",
        },
        {
          type: "text",
          text: "Common assessment methods include:",
        },
        {
          type: "list",
          items: [
            "Pulse Diagnosis (Nadi Pariksha): Feeling the radial pulse to assess doshic balance.",
            "Observation (Darshana): Observing physical characteristics like body build, skin texture, and facial features.",
            "Touch (Sparshana): Examining the skin, hair, and other tactile attributes.",
            "Questioning (Prashna): Inquiring about dietary habits, sleep patterns, emotional tendencies, and other lifestyle factors.",
          ],
        },
        { type: "subtitle", text: "Prakriti and Health Management" },
        { type: "image", src: require("../assets/content_3.2.jpg") },
        {
          type: "text",
          text: "Understanding one's Prakriti is crucial for maintaining health and preventing disease. Ayurveda advocates for lifestyle and dietary choices that align with an individual's constitution to promote balance and well-being. This personalized approach encompasses:",
        },
        { type: "subtitle", text: "Diet:" },
        {
          type: "list",
          items: [
            "Vata: Favor warm, moist, and grounding foods to counterbalance dryness and irregularity.",
            "Pitta: Opt for cooling, mild, and less oily foods to soothe heat and inflammation.",
            "Kapha: Choose light, dry, and warming foods to mitigate heaviness and congestion.",
          ],
        },
        { type: "subtitle", text: "Lifestyle:" },
        {
          type: "list",
          items: [
            "Vata: Emphasize routine, adequate rest, and calming activities.",
            "Pitta: Engage in moderate exercise, stress-reducing practices, and avoid excessive heat.",
            "Kapha: Kapha: Incorporate vigorous exercise, stimulation, and a varied routine.",
          ],
        },
        { type: "subtitle", text: "Herbal Remedies and Therapies:" },
        {
          type: "list",
          items: [
            "Personalized herbal formulations and treatments like Panchakarma (detoxification) are tailored to balance the doshas and enhance overall health.",
          ],
        },
        { type: "subtitle", text: "Prakriti in Disease Management" },
        {
          type: "text",
          text: "When imbalances (Vikriti) occur, understanding Prakriti aids in diagnosing the root cause of ailments and developing effective treatment plans. For instance, a Pitta-dominant individual may be more prone to inflammatory conditions, requiring cooling and anti-inflammatory interventions. Conversely, a Vata-predominant person might experience anxiety or digestive irregularities, necessitating grounding and calming therapies.",
        },
        { type: "subtitle", text: "Conclusion" },
        { type: "image", src: require("../assets/content_3.4.jpg") },
        {
          type: "text",
          text: "Prakriti is a cornerstone of Ayurvedic medicine, emphasizing the uniqueness of each individual and the importance of personalized health care. By understanding and honoring one's natural constitution, Ayurveda offers a path to optimal health, balance, and harmony. This ancient wisdom, rooted in the interplay of the doshas, provides timeless insights into maintaining well-being in a modern world.",
        },
        {
          type: "text",
          text: "The MyEasyPharma team",
        },
        { type: "image", src: require("../assets/mep.jpg") },
      ],
      image: require("../assets/content_3.3.jpg"),
    },
    {
      id: 4,
      title:
        "Why choose Ayurveda for Asthma Relief?\nStay healthy and breathe easy!",
      content: [
        {
          type: "text",
          text: "Asthma, a chronic respiratory condition affecting millions globally, poses significant challenges, especially for working professionals. Conventional treatments like inhalers and medications are crucial, but integrating complementary therapies such as yoga and Ayurveda can offer additional relief. This article explores how these ancient practices can help manage asthma, supported by scientific evidence.",
        },
        { type: "subtitle", text: "Let's take a look at Statistics." },
        {
          type: "list",
          items: [
            "Asthma affects 300 million people worldwide",
            "20% of working professionals report that asthma symptoms negatively impact their productivity.",
            "Studies show that yoga can reduce asthma symptoms by up to 43%.",
          ],
        },
        { type: "subtitle", text: "1.	Improved Lung Function with Pranayama" },
        { type: "image", src: require("../assets/content_4.2.jpg") },
        { type: "subtitle", text: "Scientific Evidince: " },
        {
          type: "text",
          text: "A study published in the journal Chest highlighted that yoga practices, particularly pranayama (breathing exercises), significantly improved lung function in asthma patients. The participants exhibited increased forced vital capacity (FVC) and peak expiratory flow rate (PEFR).",
        },
        { type: "subtitle", text: "Explanation " },
        {
          type: "text",
          text: "Pranayama techniques, such as Nadi Shodhana (alternate nostril breathing) and Kapalbhati (skull-shining breath), enhance lung capacity and efficiency. These exercises help clear the airways and strengthen the respiratory muscles, facilitating better oxygen intake and distribution.",
        },
        {
          type: "subtitle",
          text: "2.	Anti-Inflammatory Benefits of Ayurvedic Herbs",
        },
        { type: "image", src: require("../assets/content_4.3.jpg") },
        { type: "subtitle", text: "Scientific Evidince: " },
        {
          type: "text",
          text: "Research in the Journal of Clinical and Diagnostic Research demonstrated that Ayurvedic herbs like turmeric and ginger have potent anti-inflammatory properties. These herbs can reduce systemic inflammation, a key factor in asthma exacerbation.",
        },
        { type: "subtitle", text: "Explanation " },
        {
          type: "text",
          text: "Turmeric contains curcumin, which has strong anti-inflammatory effects, while ginger helps clear the airways. Incorporating these herbs into your diet can reduce inflammation and alleviate asthma symptoms. For instance, drinking turmeric milk or ginger tea daily can be beneficial.",
        },
        {
          type: "subtitle",
          text: "3.	Stress Reduction through Yoga",
        },
        { type: "image", src: require("../assets/content_4.4.jpg") },
        { type: "subtitle", text: "Scientific Evidince: " },
        {
          type: "text",
          text: "A study in the Journal of Asthma found that yoga significantly reduces stress and anxiety, common triggers for asthma attacks. Participants practicing yoga reported lower levels of perceived stress and anxiety, leading to fewer asthma symptoms.",
        },
        { type: "subtitle", text: "Explanation " },
        {
          type: "text",
          text: "Stress can exacerbate asthma by triggering bronchoconstriction. Yoga practices like meditation, pranayama, and gentle asanas activate the parasympathetic nervous system, promoting relaxation and reducing the frequency and severity of asthma attacks. Asanas like Setu Bandhasana and Bhujangasana help to strengthen the condition.",
        },
        {
          type: "subtitle",
          text: "4. Enhanced Respiratory Health with Tulsi (Holy Basil)",
        },
        { type: "image", src: require("../assets/content_4.5.jpg") },
        { type: "subtitle", text: "Scientific Evidince: " },
        {
          type: "text",
          text: "Studies have shown that Tulsi (Holy Basil) boosts immunity and improves respiratory health. Regular consumption of Tulsi can help reduce the frequency and severity of asthma attacks.",
        },
        { type: "subtitle", text: "Explanation " },
        {
          type: "text",
          text: "Tulsi leaves can be chewed fresh or brewed into a tea. They have anti-inflammatory, antioxidant, and immune-boosting properties, making them a valuable addition to an asthma management plan.",
        },
        {
          type: "subtitle",
          text: "5.	Complementary to Conventional Treatment",
        },
        { type: "image", src: require("../assets/content_4.6.jpg") },
        { type: "subtitle", text: "Scientific Evidince: " },
        {
          type: "text",
          text: "An article in the Journal of Alternative and Complementary Medicine emphasized that yoga and Ayurveda can effectively complement conventional asthma treatments. The integration of these practices with standard care resulted in better asthma control and reduced medication dependency.",
        },
        { type: "subtitle", text: "Explanation " },
        {
          type: "text",
          text: "Yoga and Ayurveda offer a holistic approach that addresses various aspects of asthma. These practices provide additional benefits without interfering with conventional treatments, leading to improved symptom management and a greater sense of control over the condition.",
        },
        {
          type: "text",
          text: "Recent research highlights yoga as a promising complementary therapy for asthma management. Studies indicate that regular yoga practice, including breathing exercises (pranayama) and specific postures (asanas), can reduce asthma symptoms by up to 43%. Yoga improves lung function, reduces stress, and enhances overall respiratory health. Healthcare professionals are increasingly recommending yoga to asthma patients for its holistic benefits and minimal side effects. As awareness grows, workplaces and wellness programs are integrating yoga sessions to support employees with asthma, promoting a balanced approach to health and productivity. This trend underscores the importance of lifestyle modifications in chronic disease management.",
        },
        { type: "image", src: require("../assets/content_4.7.jpg") },
        { type: "subtitle", text: "Conclusion" },
        {
          type: "text",
          text: "Scientific evidence supports the integration of yoga and Ayurveda as complementary therapies for asthma management. By improving lung function, reducing inflammation and stress, enhancing respiratory health, and complementing conventional treatments, these practices offer a holistic approach to managing asthma. Working professionals can benefit significantly from incorporating yoga and Ayurvedic tips into their daily routine, leading to better health and productivity",
        },
        {
          type: "text",
          text: "The MyEasyPharma team",
        },
      ],
      image: require("../assets/content_4.1.jpg"),
    },
    {
      id: 5,
      title:
        "Spine Health by Ayurveda: A Holistic Approach \nUnderstanding and Addressing Back Pain!",
      content: [
        {
          type: "text",
          text: "The spine, or backbone, is a vital part of the human body. It supports our structure, protects the spinal cord, and allows for flexibility and movement. Given its importance, maintaining spine health is crucial. Ayurveda, the ancient Indian system of medicine, offers a comprehensive approach to spine health, focusing on prevention, treatment, and overall well-being.",
        },
        { type: "subtitle", text: "Understanding Spine Health in Ayurveda" },
        {
          type: "text",
          text: "In Ayurveda, the spine is considered a central aspect of physical health, connected to the overall balance of the body. The spine is seen as a conduit for Prana (life energy), and any disruption can lead to various health issues. Ayurvedic philosophy emphasizes the balance of the three doshas—Vata, Pitta, and Kapha—for maintaining spine health.",
        },
        { type: "subtitle", text: "Common Spine Issues" },
        { type: "image", src: require("../assets/content_5.2.jpg") },
        {
          type: "list",
          items: [
            "Herniated Disc: Occurs when the soft center of a spinal disc pushes through a crack in the tougher exterior casing.",
            "Spondylosis: A type of degenerative arthritis affecting the spine.",
            "Sciatica: Pain affecting the back, hip, and outer side of the leg, caused by compression of a spinal nerve root.",
            "Postural Issues: Resulting from prolonged sitting or poor ergonomics.",
          ],
        },
        {
          type: "subtitle",
          text: "Back Pain in Working Professionals: Let's take a look at Statistics.",
        },
        {
          type: "list",
          items: [
            "80% of working professionals experience back pain due to poor posture and prolonged sitting.",
            "60% report lower back pain, while 40% experience upper back discomfort.",
            "45% of back pain cases are linked to herniated discs and sciatica, often exacerbated by sedentary lifestyles.",
            "35% suffer from muscle strain and ligament sprains due to lack of movement.",
          ],
        },
        {
          type: "subtitle",
          text: "This is enough to begin paying attention to our spine\n",
        },
        {
          type: "subtitle",
          text: "Ayurvedic Principles for Spine Health\n",
        },
        {
          type: "subtitle",
          text: "Diet and Nutrition",
        },
        { type: "image", src: require("../assets/content_5.3.jpg") },
        {
          type: "text",
          text: "Ayurveda advocates for a balanced diet to maintain the health of the spine:",
        },
        {
          type: "list",
          items: [
            "Ayurveda advocates for a balanced diet to maintain the health of the spine:",
            "Calcium-Rich Foods: Include dairy products, leafy greens, and almonds to strengthen the bones.",
            "Healthy Fats: Consume ghee and sesame oil, which nourish the bones and joints.",
          ],
        },
        {
          type: "subtitle",
          text: "Herbal Remedies",
        },
        { type: "image", src: require("../assets/content_5.4.jpg") },
        {
          type: "text",
          text: "Several Ayurvedic herbs are known for their beneficial effects on spine health:",
        },
        {
          type: "list",
          items: [
            "Ashwagandha: Helps in reducing inflammation and strengthens the muscles and bones.",
            "Guggulu: Known for its anti-inflammatory properties, it is used to treat arthritis and spinal issues.",
            "Shallaki (Boswellia): Effective in reducing pain and inflammation in the joints and spine.",
            "Nirgundi: Used for its anti-inflammatory and analgesic properties.",
          ],
        },
        {
          type: "subtitle",
          text: "Yoga and Exercise",
        },
        { type: "image", src: require("../assets/content_5.5.jpg") },
        {
          type: "text",
          text: "Yoga is integral to maintaining spine health in Ayurveda. Specific asanas (poses) are recommended:",
        },
        {
          type: "list",
          items: [
            "Bhujangasana (Cobra Pose): Strengthens the spine and relieves back pain.",
            "Marjariasana (Cat-Cow Pose): Enhances flexibility and relieves tension in the spine.",
            "Tadasana (Mountain Pose): Improves posture and aligns the spine.",
            "Trikonasana (Triangle Pose): Strengthens the back and spine muscles.",
          ],
        },
        {
          type: "text",
          text: "Regular practice of these asanas can improve flexibility, posture, and reduce back pain.",
        },
        {
          type: "subtitle",
          text: "Panchakarma Therapy",
        },
        { type: "image", src: require("../assets/content_5.6.jpg") },
        {
          type: "text",
          text: "Panchakarma is a detoxification process in Ayurveda that helps in cleansing the body and removing toxins. Specific treatments beneficial for spine health include:",
        },
        {
          type: "list",
          items: [
            "Abhyanga (Oil Massage): Warm herbal oils are used to massage the body, improving circulation and relieving tension in the spine.",
            "Basti (Medicated Enema): Helps in detoxifying the colon and improving spinal health.",
            "Kati Basti: A treatment where warm herbal oil is poured and retained on the lower back. It is beneficial for lower back pain and spinal disorders.",
          ],
        },
        {
          type: "subtitle",
          text: "Lifestyle Modifications",
        },
        {
          type: "list",
          items: [
            "Proper Posture: Maintain good posture while sitting, standing, and sleeping. Use ergonomic furniture if you have a desk job.",
            "Regular Exercise: Engage in regular physical activity to strengthen the muscles supporting the spine.",
            "Stress Management: Practice meditation and Pranayama (breathing exercises) to reduce stress, which can affect spine health.",
          ],
        },
        {
          type: "subtitle",
          text: "Scientific Backing",
        },
        {
          type: "text",
          text: "Several studies support the efficacy of Ayurvedic practices for spine health:",
        },
        {
          type: "list",
          items: [
            "A study published in the Journal of Alternative and Complementary Medicine found that Ashwagandha significantly reduced inflammation and improved mobility in patients with spine issues.",
            "Research in the Journal of Ayurveda and Integrative Medicine highlighted the benefits of yoga in reducing chronic back pain and improving spinal flexibility.",
            "A clinical trial in the International Journal of Ayurveda Research demonstrated the effectiveness of Panchakarma therapies, including Kati Basti, in managing lumbar spondylosis and reducing pain.",
          ],
        },
        {
          type: "text",
          text: "The wellness industry is seeing a significant surge in the popularity of yoga as a remedy for spine health issues among working professionals. Recent studies highlight the effectiveness of specific yoga practices in alleviating back pain caused by prolonged sitting and poor posture. Employers are increasingly incorporating yoga sessions into workplace wellness programs to enhance employee health and productivity. Notable yoga instructors are collaborating with health professionals to design targeted routines that address common spinal problems. As awareness grows, more individuals are turning to yoga for its holistic benefits, marking a positive shift towards proactive spine care and overall well-being in the corporate world.",
        },
        {
          type: "subtitle",
          text: "Conclusion",
        },
        {
          type: "text",
          text: "Ayurveda offers a holistic approach to spine health, integrating diet, herbal remedies, yoga, Panchakarma, and lifestyle modifications. By following these principles, one can maintain a healthy spine, prevent spinal disorders, and enhance overall well-being. As always, it is advisable to consult with a qualified Ayurvedic practitioner before starting any new treatment regimen.",
        },
        {
          type: "text",
          text: "The MyEasyPharma Team",
        },
      ],
      image: require("../assets/content_5.1.jpg"),
    },
    {
      id: 6,
      title: "Seasonal Ayurvedic Practices for Office Workers",
      content: [
        {
          type: "subtitle",
          text: "Introduction",
        },
        { type: "image", src: require("../assets/content_6.1.jpeg") },
        {
          type: "text",
          text: "Ayurveda, the ancient Indian system of medicine, emphasizes living in harmony with nature and adapting our lifestyle to the changing seasons. This approach is especially relevant for office workers who often experience the stresses of modern work environments. By aligning our routines with Ayurvedic principles, we can maintain balance, enhance productivity, and promote overall well-being throughout the year. This article explores how to adapt Ayurvedic practices to the different seasons, including recommended foods, exercises, and self-care tips.",
        },

        {
          type: "subtitle",
          text: "Spring (Vasanta) ",
        },
        { type: "image", src: require("../assets/content_6.2.jpeg") },
        {
          type: "subtitle",
          text: "Characteristics:",
        },
        {
          type: "text",
          text: "Spring is a time of renewal and rejuvenation, but it can also bring an increase in Kapha dosha, leading to sluggishness and allergies.",
        },
        {
          type: "subtitle",
          text: "Foods:",
        },
        {
          type: "list",
          items: [
            "Light and Warming: Focus on light, warming foods to balance Kapha. Include fresh vegetables, bitter greens, and spices like ginger, turmeric, and black pepper.",
            "Avoid: Heavy, oily, and sweet foods which can increase Kapha.",
          ],
        },
        {
          type: "subtitle",
          text: "Exercises",
        },
        {
          type: "list",
          items: [
            "Invigorating Activities: Engage in more vigorous physical activities like brisk walking, jogging, or dynamic yoga to energize the body.",
            "Morning Workouts: Prefer morning exercise routines to shake off any lethargy.",
          ],
        },
        {
          type: "subtitle",
          text: "Self-Care Tips",
        },
        {
          type: "list",
          items: [
            "Dry Brushing: Stimulate circulation and lymphatic drainage with dry brushing before a shower.",
            "Aromatherapy: Use invigorating essential oils like eucalyptus and rosemary to uplift your mood.",
          ],
        },
        {
          type: "subtitle",
          text: "Summer (Grishma)",
        },
        { type: "image", src: require("../assets/content_6.3.webp") },
        {
          type: "subtitle",
          text: "Characteristics:",
        },
        {
          type: "text",
          text: "Summer is dominated by the Pitta dosha, characterized by heat and intensity. It's important to cool down and stay hydrated.",
        },
        {
          type: "subtitle",
          text: "Foods:",
        },
        {
          type: "list",
          items: [
            "Cooling and Hydrating: Emphasize cooling foods like cucumbers, melons, leafy greens, and coconut water. Include spices like coriander, fennel, and mint.",
            "Avoid: Hot, spicy, and oily foods which can aggravate Pitta.",
          ],
        },
        {
          type: "subtitle",
          text: "Exercises",
        },
        {
          type: "list",
          items: [
            "Moderate Activities: Engage in moderate physical activities such as swimming, walking, and gentle yoga. Avoid strenuous workouts during the hottest part of the day.",
            "Evening Workouts: Opt for cooler evening exercise sessions. Self-Care Tips:",
          ],
        },
        {
          type: "subtitle",
          text: "Self-Care Tips",
        },
        {
          type: "list",
          items: [
            "Cooling Sprays: Use a facial mist or rose water spray to cool down throughout the day.",
            "Aloe Vera: Apply aloe vera gel to soothe and hydrate your skin.",
          ],
        },
        {
          type: "subtitle",
          text: "Autumn (Sharad)",
        },
        { type: "image", src: require("../assets/content_6.4.jpeg") },
        {
          type: "subtitle",
          text: "Characteristics:",
        },
        {
          type: "text",
          text: "Autumn is a time of transition, marked by Vata dosha with its qualities of dryness, coolness, and variability. Grounding and nourishing practices are essential.",
        },
        {
          type: "subtitle",
          text: "Foods:",
        },
        {
          type: "list",
          items: [
            "Warm and Nourishing: Choose warm, nourishing foods like root vegetables, grains, and warming spices like cinnamon, cardamom, and cloves.",
            "Avoid: Cold, raw foods which can increase Vata.",
          ],
        },
        {
          type: "subtitle",
          text: "Exercises",
        },
        {
          type: "list",
          items: [
            "Grounding Activities: Practice grounding exercises like yoga, Tai Chi, or walking in nature to stay centered.",
            "Consistent Routine: Maintain a consistent exercise routine to keep Vata in balance.",
          ],
        },
        {
          type: "subtitle",
          text: "Self-Care Tips",
        },
        {
          type: "list",
          items: [
            "Abhyanga (Oil Massage): Perform daily self-massage with warm sesame or almond oil to combat dryness and promote relaxation.",
            "Warm Baths: Take warm baths with calming essential oils like lavender or chamomile.",
          ],
        },
        {
          type: "subtitle",
          text: "Winter (Hemanta)",
        },
        { type: "image", src: require("../assets/content_6.5.webp") },
        {
          type: "subtitle",
          text: "Characteristics:",
        },
        {
          type: "text",
          text: "Winter is dominated by Kapha and Vata doshas, characterized by cold, heaviness, and dampness. It's essential to keep warm and boost immunity.",
        },
        {
          type: "subtitle",
          text: "Foods:",
        },
        {
          type: "list",
          items: [
            "Warm and Spicy: Focus on warm, nourishing, and slightly spicy foods like soups, stews, and spices like ginger, garlic, and black pepper.",
            "Avoid: Cold and raw foods which can increase Vata and Kapha.",
          ],
        },
        {
          type: "subtitle",
          text: "Exercises",
        },
        {
          type: "list",
          items: [
            "Warming Activities: Engage in warming activities like indoor workouts, strength training, and dynamic yoga.",
            "Regular Exercise: Maintain a regular exercise routine to boost circulation and stay warm.",
          ],
        },
        {
          type: "subtitle",
          text: "Self-Care Tips",
        },
        {
          type: "list",
          items: [
            "Steam Inhalation: Use steam inhalation with eucalyptus or peppermint oil to keep respiratory passages clear.",
            "Hydration: Stay hydrated with warm herbal teas and broths.",
          ],
        },
        {
          type: "subtitle",
          text: "Conclusion",
        },
        {
          type: "text",
          text: "Adapting Ayurvedic practices to the changing seasons can help office workers maintain balance, enhance productivity, and promote overall well-being. By incorporating seasonal foods, exercises, and self-care routines, you can harmonize your body with nature and thrive throughout the year. Embrace these timeless practices and experience the benefits of Ayurveda in your daily work life.",
        },
        {
          type: "text",
          text: "The MyEasyPharma Team",
        },
      ],
      image: require("../assets/blogs7.jpeg"),
    },
    {
      id: 7,
      title: "The Role of Sleep in Employee Productivity",
      content: [
        {
          type: "subtitle",
          text: "Introduction",
        },
        {
          type: "text",
          text: "In today’s fast-paced corporate world, sleep is often overlooked in favor of long work hours and constant connectivity. However, quality sleep is a cornerstone of health and productivity. For employees, adequate sleep is crucial for maintaining focus, creativity, and overall performance at work. This article explores the importance of sleep for workplace productivity and offers practical tips for promoting better sleep habits among employees.",
        },
        {
          type: "subtitle",
          text: "The Importance of Quality Sleep for Workplace Performance",
        },
        {
          type: "subtitle",
          text: "1. Enhanced Cognitive Function:",
        },
        {
          type: "list",
          items: [
            "Sleep is essential for brain function, including cognition, concentration, and memory. Lack of sleep can impair decision-making, problem-solving, and creativity, directly impacting work performance.",
          ],
        },
        {
          type: "subtitle",
          text: "2. Improved Mood and Emotional Stability:",
        },
        {
          type: "list",
          items: [
            "Adequate sleep helps regulate mood and reduce stress. Employees who sleep well are more likely to be positive, patient, and resilient, contributing to a healthier work environment.",
          ],
        },
        {
          type: "subtitle",
          text: "3. Increased Efficiency and Productivity:",
        },
        {
          type: "list",
          items: [
            "Well-rested employees can work more efficiently and make fewer mistakes. Sleep improves attention to detail and the ability to focus on tasks, leading to higher productivity.",
          ],
        },
        {
          type: "subtitle",
          text: "4. Better Physical Health:",
        },
        {
          type: "list",
          items: [
            "Sleep supports the immune system and overall physical health. Healthy employees are less likely to take sick days, contributing to consistent productivity.",
          ],
        },
        { type: "image", src: require("../assets/content_7.2.webp") },
        {
          type: "subtitle",
          text: "Tips for Promoting Better Sleep Habits Among Employees",
        },
        {
          type: "subtitle",
          text: "1. Educate Employees on the Importance of Sleep:",
        },
        {
          type: "text",
          text: "Conduct workshops or seminars on sleep health, highlighting the benefits of quality sleep and the risks of sleep deprivation.",
        },
        {
          type: "subtitle",
          text: "2. Encourage a Consistent Sleep Schedule:",
        },
        {
          type: "text",
          text: "Advise employees to go to bed and wake up at the same time every day, even on weekends. Consistency helps regulate the body’s internal clock.",
        },
        {
          type: "subtitle",
          text: "3. Promote a Healthy Work-Life Balance:",
        },
        {
          type: "text",
          text: "Encourage employees to disconnect from work-related activities outside of office hours. This includes avoiding emails and work calls in the evening to reduce stress and promote relaxation.",
        },

        {
          type: "subtitle",
          text: "4. Create a Sleep-Friendly Work Environment:",
        },
        {
          type: "text",
          text: "Ensure the office environment supports employee well-being. This includes providing natural light, encouraging short breaks, and allowing flexible work hours where possible.",
        },
        {
          type: "subtitle",
          text: "5. Promote Physical Activity:",
        },
        {
          type: "text",
          text: "Encourage regular exercise, which can improve sleep quality. Offer wellness programs, gym memberships, or organize group exercise activities.",
        },
        {
          type: "subtitle",
          text: "6. Limit Caffeine and Sugar Intake:",
        },
        {
          type: "text",
          text: "Educate employees about the impact of caffeine and sugar on sleep. Provide healthy snack options in the office and discourage late-afternoon consumption of stimulants.",
        },
        {
          type: "subtitle",
          text: "7. Encourage Relaxation Techniques:",
        },
        {
          type: "text",
          text: "Promote relaxation techniques such as meditation, deep breathing exercises, or yoga. These practices can help reduce stress and prepare the body for restful sleep.",
        },
        {
          type: "subtitle",
          text: "8. Provide Comfortable Rest Areas:",
        },
        {
          type: "text",
          text: "If possible, create quiet, comfortable spaces where employees can take short naps or relax during breaks. A quick power nap can rejuvenate and improve afternoon productivity.",
        },
        { type: "image", src: require("../assets/content_7.3.webp") },
        {
          type: "subtitle",
          text: "Conclusion",
        },
        {
          type: "text",
          text: "Quality sleep is vital for employee productivity and overall workplace performance. By understanding the importance of sleep and implementing strategies to promote better sleep habits, employers can create a healthier, more productive work environment. Encouraging employees to prioritize sleep will not only improve their well-being but also enhance their efficiency and job satisfaction. Embrace these practices and watch your workforce thrive.",
        },
        {
          type: "text",
          text: "The MyEasyPharma Team",
        },
      ],
      image: require("../assets/content_7.1.webp"),
    },

    // Add more blogs as needed
  ]);
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const debouncedSearch = debounce(handleSearch, 800);

  function handleSearch(text) {
    // Implement search logic here
  }

  const handleInputChange = (text) => {
    setInput(text);
    debouncedSearch(text);
  };

  const toggleExpand = (id) => {
    setExpandedBlogId((prevId) => (prevId === id ? null : id));
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <MaterialIcons name="arrow-back" size={24} color="#254336" />
          </Pressable>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.headerTitle}>Blogs</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Blogs"
            value={input}
            onChangeText={handleInputChange}
          />
          <Ionicons
            name="search"
            size={23}
            color="#254336"
            style={styles.searchIcon}
          />
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.blogContainer}>
            {filteredBlogs.map((blog) => (
              <TouchableOpacity
                key={blog.id}
                onPress={() => toggleExpand(blog.id)}
              >
                <View style={styles.blogItem}>
                  <Image source={blog.image} style={styles.blogImage} />
                  <Text style={styles.blogTitle}>{blog.title}</Text>
                  {expandedBlogId === blog.id && (
                    <View style={styles.blogContent}>
                      {blog.content.map((contentItem, index) => {
                        switch (contentItem.type) {
                          case "text":
                            return (
                              <Text key={index} style={styles.blogText}>
                                {contentItem.text}
                              </Text>
                            );
                          case "image":
                            return (
                              <Image
                                key={index}
                                source={contentItem.src}
                                style={styles.blogContentImage}
                              />
                            );
                          case "subtitle":
                            return (
                              <Text key={index} style={styles.blogSubtitle}>
                                {contentItem.text}
                              </Text>
                            );
                          case "list":
                            return (
                              <View key={index} style={styles.blogList}>
                                {contentItem.items.map((item, idx) => (
                                  <Text key={idx} style={styles.blogListItem}>
                                    - {item}
                                  </Text>
                                ))}
                              </View>
                            );
                          default:
                            return null;
                        }
                      })}
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Light overlay with 70% opacity
  },
  container: {
    flex: 1,
    paddingTop: 50, // Adjust this value to give some top padding
    paddingHorizontal: 20, // Adjust this value for horizontal spacing
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "transparent",
  },
  backButton: {
    padding: 5,
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    borderWidth: 1.5,
    borderColor: "#254336",
    paddingHorizontal: 10,
    height: 48,
    borderColor: "#254336",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    color: "#254336",
    fontWeight: "500",
    fontSize: 18,
  },
  searchIcon: {
    marginLeft: 10,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  blogContainer: {
    padding: 10,
  },
  blogItem: {
    marginBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#254336",
  },
  blogImage: {
    width: "100%",
    height: 200,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    color: "#254336",
  },
  blogContent: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  blogText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#254336",
  },
  blogContentImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  blogSubtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#254336",
  },
  blogList: {
    marginBottom: 10,
  },
  blogListItem: {
    fontSize: 18,
    marginBottom: 5,
    color: "#254336",
  },
});

export default BlogScreen;

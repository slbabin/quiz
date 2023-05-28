# Quiz info

This quiz is designed to test participants knowledge of traffic rules and regulations, ensuring that they have a solid understanding of the rules necessary for safe and responsible driving. Whether you're a new driver preparing for your license exam or an experienced driver looking to refresh your knowledge, this quiz provides a comprehensive set of multiple-choice questions to challenge and educate participants.

![Screenshot of how the site looks on different screen sizes](assets/docs/responsive-screens.jpg)

Link to the live site [here](https://slbabin.github.io/quiz/). 


## Features

- Multiple Choice Questions: The quiz consists of a series of multiple-choice questions covering various aspects of traffic rules. Each question presents you with several options, and you must select the correct answer that best corresponds to the given scenario or rule.

     ![Screenshot of the Product links section](assets/docs/multi-choice-questions.jpg) 

- Dynamically changed with each question image: Images help visually represent concepts or scenarios related to the quiz questions. They  enhance the clarity and understanding of the question by providing a visual context, making it easier for the user to interpret and answer accurately.

    ![Screenshot of the Product links section](assets/docs/dynamic-image.jpg) 

- Time tracking: After starting the quiz, the timer appears on the screen. The timer adds a sense of challenge and urgency to the quiz, encouraging participants to answer questions quickly and efficiently. It creates a more engaging and dynamic experience, keeping users focused and motivated throughout the quiz. 

    ![Screenshot of the Product links section](assets/docs/timer.jpg) 


- Score calculation: At the end of the quiz, a user presented with the score based on the number of answered correct answers out of the total pool of questions. 
The score serves as a motivator for participants to strive for a higher score with each attempt. It provides a target to beat and can encourage a sense of achievement when participants see improvement over time. 

    ![Screenshot of the Product links section](assets/docs/score.jpg) 

- Spent time calculation: The time spent counter allows participants to reflect on the amount of time they took to complete the quiz. It provides a sense of self-awareness regarding their speed and efficiency in answering the questions. Participants can assess whether they took an appropriate amount of time or if they need to work on improving their time management skills.

    ![Screenshot of the Product links section](assets/docs/spent-time.jpg) 

## Quiz logic diagram    

<details>
<summary>Diagram</summary>
<img src="assets/images/diagram.png">
</details>


## Design 

- The quiz consists of the landing page and the actual quiz page. A landing page sets the context and creats anticipation for the participants. 

- Wireframes
  
    <details>
    <summary>Desktop wireframes</summary>
    <img src="assets/docs/desktop-wireframe.png">
    </details>

    <details>
    <summary>Tablet wireframes</summary>
    <img src="assets/docs/tablet-wireframe.png">
    </details>

    <details>
    <summary>Mobile wireframes</summary>    
    <img src="assets/docs/mobile-wirefreame.png">
    </details>


__Colour Scheme__
    - Blue was chosen as the main color of the quiz because it is often associated with clarity, logic, and rational thinking. It is a color commonly used in educational settings due to its perceived intellectual qualities. By incorporating blue into the quiz's color scheme, it can create an atmosphere that promotes clear thinking and logical problem-solving, which are essential aspects of a quiz. 
    - The text color is white because is is often associated with cleanliness, simplicity, and minimalism. It creates a clean and uncluttered visual appearance, allowing the content to stand out.

__Typography__
    - The Montserrat font was chosen as the main font throughout the whole website due to its clean and attractive design. Sans Serif  was chosen as the fallback font. 
    - The Anton font was chosen for titles and headings. Anton is a bold and attention-grabbing font. It has thick letterforms with high contrast, which make it stand out on the page.  

## Testing and Validation
 
 __HTML validation__

The HTML of the quiz was validated using the W3C Markup Validation Service . All pages passed with no errors or warnings.
    <details>
    <summary>Index page HTML validation</summary>
    <img src="assets/docs/w3c-index-page-validation.jpg">
    </details>
    <details>
    <summary>Quiz page HTML validation</summary>
    <img src="assets/docs/w3c-quiz-page-validation.jpg">
    </details>

 __CSS validation__  
 The CSS code was validated in the W3C Jigsaw CSS Validation Service. The code passed without any errors. 
    <details>
    <summary>CSS validation result</summary>
    <img src="assets/docs/css-validation.jpg">
    </details>

__JavaScript validation__

The JavaScript file was validated using the [JSHint](https://en.wikipedia.org/wiki/JSHint) code analysis tool. Initially, it showed multiple warnings - 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). But since these warnings are not related to the code, they were hidden using /*jshint esversion: 6 */. Other four warnings also not essensial. 
    <details>
    <summary> JavaSript validation results</summary>
    <img src="assets/docs/javascript-jshint-validation.jpg">
    </details>

__Accessibility and Performance__

The quiz was tested for accessibility and performance using the Lighthouse tool on Google Chrome Devtools. 
    <details>
    <summary> The Lighthouse results</summary>
    <img src="assets/docs/lighthouse-mobile.jpg">
    </details>

__Web browser compatibility__    
The quiz was tested in the following browsers.
- Google Chrome
- Mozilla Firefox
- Opera
- Safari

## Deployment
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. On the Repository page, click on the "Settings" button.
3. Scroll down to the Pages tab on the left side.
4. Under Branches select Main and click Save.
5. The page will refresh and the link to the site will appear [https://slbabin.github.io/quiz/index.html](https://slbabin.github.io/quiz/index.html)

## Technologies Used
Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)


Programs Used
 - [GitHub:](https://github.com/) Used for version control and to store the projects code after being pushed from GitPod or Codeanywhere.
  - [Codeanywhere:](https://codeanywhere.com/) Codeanywhere is a cloud-based integrated development environment that includes a built-in code editor, a fully-featured development environment for servers and containers, an integrated debugger, and live collaboration tools.
  - [Photopea:](https://www.photopea.com/) Online photo editor. Used for editing images.
  - [Balsamiq:](https://balsamiq.com/wireframes/) Was used to create the wireframes.
  - [Google fonts:](https://fonts.google.com/) Used to import the 'Monserat' and Anto fonts into the style.css file which is used on all pages throughout the project.

## Credits
__Content__
 
 - Questions for the quiz were taken from the [TheoryTestIreland.org](https://theorytestireland.org/t).

__Media__
- The landing page image was taken from [www.flaticon.com](https://www.flaticon.com/free-icon/driving-test_3400666).
- Images for the quiz were taken from [www.pixabay.com](https://pixabay.com/photos/cars-close-up-headlights-lights-1840934/), [www.caranddriver.com/](https://www.caranddriver.com/car-insurance/a36279965/comp-insurance-car/), [www.designi.com.br](https://www.designi.com.br/d1a377ca74fd9f7c) and [www.gomechanic.in](https://gomechanic.in/blog/car-exhaust-smoke/).

__Code__
- The quiz code was inspired by the code from this [Youtube video](https://www.youtube.com/watch?v=hFKVLwe_yLg&ab_channel=%D0%92%D0%B5%D0%B1%D0%9A%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8-%D0%B2%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%2C%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%B8IT). 
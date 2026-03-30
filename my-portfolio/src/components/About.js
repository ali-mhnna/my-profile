import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">عني</h2>
      <div className="about-container">
        
        <div className="about-text">
          <p>
            مرحباً! أنا مطور Full Stack شغوف ببناء تطبيقات ويب متكاملة.
            أعمل على تطوير الواجهات الأمامية باستخدام React و Bootstrap،
            وأبني الأنظمة الخلفية باستخدام PHP و Laravel مع قواعد بيانات MySQL.
          </p>
          <p>
            أحب التعلم المستمر ومواجهة التحديات البرمجية.
            أسعى دائماً لتقديم حلول تقنية فعّالة ومتقنة.
          </p>
          <div className="about-info">
            <div>
              <span className="info-number">2+</span>
              <span className="info-label">سنوات خبرة</span>
            </div>
            <div>
              <span className="info-number">2+</span>
              <span className="info-label">مشروع مكتمل</span>
            </div>
            <div>
              <span className="info-number">2+</span>
              <span className="info-label">عملاء سعداء</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
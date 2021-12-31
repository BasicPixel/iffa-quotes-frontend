const About = () => {
  return (
    <div className="bg-slate-300 text-slate-800 rounded p-2">
      <h1 className="text-2xl mb-2">عن المشروع</h1>
      <p>
        مشروع "ولْيَسْتَعْفِف" مشروع يعنى بإعانة الشباب على العفة وغض البصر، من
        خلال نشر وتوفير ما يعِظ المسلم ويحث على غض البصر، من آيات، وأحاديث،
        ونقولات وفوائد من كلام أئمة وعلماء السلف والخلف.
      </p>
      <p>
        تمكن المساهمة في المشروع من خلال:
        <ol className="list-decimal list-inside indent-2">
          <li>الدعاء للقائمين على المشروع بالتوفيق والسداد</li>
          <li>
            إضافة المقولات والاقتباسات، من خلال الموقع (بالضغط على رابط "أضف
            مقولة" بالأعلى) أو من خلال بوت التيليجرام الذي سينشأ قريبًا بإذن
            الله تعالى.
          </li>
          <li>
            المساهمة في تصميم وتطوير الموقع لمن لديه الخبرة التقنية،{" "}
            <a
              href="https://github.com/BasicPixel/iffa-quotes-frontend"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600"
            >
              رابط GitHub
            </a>
          </li>
          <li>
            نشر الموقع أو تطبيق الأندرويد بما تستطيع، والدال على الخير كفاعله
          </li>
        </ol>
      </p>
      <p className="text-slate-600 text-center">
        تصميم وإنشاء:{" "}
        <a href="https://t.me/qudah" target="_blank" rel="noreferrer">
          أسامة القضاة
        </a>
      </p>
    </div>
  );
};

export default About;

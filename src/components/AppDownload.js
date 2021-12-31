const AppDownload = () => {
  return (
    <div className="bg-slate-300 text-slate-800 rounded p-2">
      <h1>تحميل تطبيق الأندرويد</h1>
      <p className="p-0">
        يتوفر تطبيق هاتفي لمشروع "وليستعفف" لأجهزة الأندرويد
      </p>
      <a href={process.env.PUBLIC_URL + "/وليستعفف.apk"} download>
        <button className="p-2 my-2 bg-slate-800 hover:bg-slate-600 text-slate-200 hover:transition-all duration-200 rounded">
          تنزيل التطبيق
        </button>
      </a>
      <div className="bg-yellow-100 border-yellow-400 border-2 p-2 rounded w-full">
        ملاحظة: عند تنزيل التطبيق يظهر تحذير من التثبيت لأن التطبيق غير معروف،
        فاضغط على "التثبيت على أي حال" أو "Install anyway"
      </div>
    </div>
  );
};

export default AppDownload;

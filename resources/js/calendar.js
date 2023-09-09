import { Calendar } from "@fullcalendar/core";
import jaLocale from "@fullcalendar/core/locales/ja";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');

const calendarEl = document.getElementById("calendar");

const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, timeGridPlugin],
    // ナビゲーション
    headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    // 日本語化
    locales: jaLocale,
    locale: 'ja',

    // 日付表示の境界線時刻を設定(デフォルトは9時)
    nextDayThreshold: '00:00:00',

     // データを用意
    events: [
        {
            'title': 'ランチ',
            'start': year + '-' + month + '-01 12:00',
            'end': year + '-' + month + '-01 13:00'
        },
        {
            'title': 'デート',
            'start': year + '-' + month + '-21 19:00',
            'end': year + '-' + month + '-21 22:00'
        },
        {
            'title': '給料日',
            'start': year + '-' + month + '-25',
            'end': year + '-' + month + '-25'
        },
        {
            'title': '銀行',
            'start': year + '-' + month + '-26 12:00',
            'end': year + '-' + month + '-26 12:10'
        },
        {
            'title': 'ごめんねの日',
            'start': year + '-12-10',
            'end': year + '-12-10'
        },
    ],
});

calendar.render();

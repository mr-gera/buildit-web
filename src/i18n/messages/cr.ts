import type { Messages } from '@/i18n/types'

export const cr: Messages = {
  nav: {
    features: 'Značajke',
    roles: 'Uloge',
    screens: 'Zasloni',
    roadmap: 'Plan razvoja',
  },
  common: {
    inDevelopment: 'U izradi',
    homeAria: 'eBud početna',
    primaryNavAria: 'Glavna navigacija',
    openMenu: 'Otvori izbornik',
    closeMenu: 'Zatvori izbornik',
    languageAria: 'Promijeni jezik',
  },
  hero: {
    badge: 'USKORO',
    titleLead: 'Kontrola napretka gradnje — od zadatka do ',
    titleHighlight: 'fotodokaza',
    description:
      'eBud pomaže vlasnicima, poslovođama i radnicima u upravljanju projektima obnove i gradnje, praćenju statusa, dodjeli zadataka i čuvanju fotodokaza na jednom mjestu.',
    features: [
      'Praćenje napretka i statusa u stvarnom vremenu',
      'Fotodokaz za svaki posao',
    ],
    note: 'trenutačno je u izradi. Gradimo budućnost upravljanja gradnjom.',
    screenAlts: [
      'Pregled zaslona sudionika eBud',
      'Pregled zaslona popisa projekata eBud',
      'Pregled zaslona pojedinosti projekta eBud',
    ],
  },
  problem: {
    heading: 'eBud za stvarnost gradilišta',
    cards: [
      {
        title: 'Raspršena komunikacija',
        text: 'Ažuriranja projekta gube se u porukama, chatovima, pozivima i bilježnicama.',
      },
      {
        title: 'Izgubljene fotografije i dokumenti',
        text: 'Jedno mjesto za pohranu fotografija, zapisa i povijesti radova.',
      },
      {
        title: 'Nejasan status',
        text: 'Teško je znati što je gotovo, što slijedi i što kasni.',
      },
      {
        title: 'Niska odgovornost',
        text: 'Bez jasne odgovornosti i dokaza događaju se pogreške.',
      },
    ],
  },
  screens: {
    heading: 'Cjeloviti tijek rada u jednoj aplikaciji',
    items: [
      {
        title: 'Pregled projekata',
        subtitle: 'Svi projekti na prvi pogled',
        alt: 'Zaslon pregleda projekata eBud s popisom građevinskih projekata i napretkom',
      },
      {
        title: 'Tim i uloge',
        subtitle: 'Svatko u pravoj ulozi',
        alt: 'Zaslon sudionika eBud s članovima tima, njihovim ulogama i prisutnošću',
      },
      {
        title: 'Radovi',
        subtitle: 'Planirajte, pratite i ažurirajte radove',
        alt: 'Zaslon radova eBud sa zadacima i njihovim statusima',
      },
      {
        title: 'Nadzorna ploča analitike',
        subtitle: 'Ključni pokazatelji na jednom mjestu',
        alt: 'Nadzorna ploča analitike eBud s trendom napretka i raspodjelom statusa radova',
      },
      {
        title: 'Fotodokaz',
        subtitle: 'Prije, poslije i između',
        alt: 'Zaslon fotografija radova eBud s fotodokazima prije i poslije',
      },
      {
        title: 'Pojedinosti projekta',
        subtitle: 'Sve u kontekstu',
        alt: 'Zaslon pojedinosti projekta eBud s napretkom, strukturom i nedavnim radovima',
      },
    ],
  },
  roles: {
    heading: 'Stvoreno za svaku ulogu na gradilištu',
    cards: [
      {
        title: 'Vlasnik',
        description: 'Pratite ukupni napredak, ključne pokazatelje, probleme i rokove.',
        bullets: [
          'Pregled u stvarnom vremenu',
          'Uvid u proračun i rokove',
          'Bolje odluke',
        ],
      },
      {
        title: 'Poslovođa',
        description:
          'Upravljajte dnevnim zadacima, pratite status i držite tim na pravom putu.',
        bullets: [
          'Stvaranje i dodjela zadataka',
          'Praćenje napretka',
          'Održavanje plana projekta',
        ],
      },
      {
        title: 'Radnik',
        description: 'Pogledajte svoje zadatke, ažurirajte status i isporučite posao na vrijeme.',
        bullets: [
          'Pregled dnevnih zadataka',
          'Učitavanje fotodokaza',
          'Usklađenost s timom',
        ],
      },
    ],
  },
  workflow: {
    heading: 'Kako eBud radi',
    steps: [
      {
        title: 'Stvorite projekt',
        text: 'Dodajte pojedinosti projekta, strukturu i rokove.',
      },
      {
        title: 'Dodijelite tim',
        text: 'Pozovite članove tima i postavite njihove uloge.',
      },
      {
        title: 'Pratite radove',
        text: 'Stvarajte zadatke, ažurirajte status i pratite napredak.',
      },
      {
        title: 'Pregledajte fotodokaz',
        text: 'Snimite fotodokaze i zatvorite krug.',
      },
    ],
  },
  roadmap: {
    heading: 'Plan razvoja proizvoda',
    eyebrow: 'MVP u izradi',
    footnote: 'Plan razvoja je informativan i može se mijenjati kako proizvod napreduje.',
    items: [
      {
        title: 'MVP u izradi',
        text: 'Osnovno upravljanje projektima, zadacima i timom za početak.',
        time: 'Q3 2026',
      },
      {
        title: 'Tijekovi rada prema ulogama',
        text: 'Pametnija prava prema ulogama i prilagođeno iskustvo za svakog korisnika.',
        time: 'Q4 2026',
      },
      {
        title: 'Foto-izvještavanje',
        text: 'Napredno snimanje fotografija, bilješke i praćenje dokaza.',
        time: 'Q4 2026',
      },
      {
        title: 'Modul analitike',
        text: 'Dublji uvidi, izvješća i nadzorne ploče učinkovitosti.',
        time: 'Kasnije',
      },
    ],
  },
  development: {
    title: 'eBud je u aktivnoj izradi.',
    description:
      'Gradimo bolji način upravljanja građevinskim projektima od temelja.',
    chips: [
      'Promišljen dizajn',
      'Izrađeno uz povratne informacije struke',
      'Pregled proizvoda',
    ],
    footnote: 'Koncept odredišne stranice / pregled proizvoda',
  },
  footer: {
    rights: '© 2026 eBud. Sva prava pridržana.',
    links: {
      product: 'Proizvod',
      features: 'Značajke',
      status: 'Status',
    },
  },
  notFound: {
    code: '404',
    title: 'Stranica nije pronađena',
    description:
      'Stranica koju tražite još ne postoji. eBud je još u izradi — uskoro stiže više.',
    back: 'Natrag na početnu',
  },
}

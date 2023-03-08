import { Badge, Accordion } from 'react-bootstrap'

function History() {
    const posts = [
        {
            id: 1,
            title: 'SNNC MES Refresh',
            href: '#',
            description: 'MES 시스템 내 설비관리시스템을 맡아 개발을 하였습니다. Front-end는 html, css, javascript, jqeury로 Back-end는 Spring 기반의 Glue라는 Posco Ict 자체 Framework를 사용 DB는 Oracle을 사용하여 개발하였습니다.',

            date: '2022.07 ~ 2023.02',
            datetime: '2020-03-16',
            category: { title: '개발', href: '#' }
        },
        {
            id: 2,
            title: '한국전력 4.0 영배시스템',
            href: '#',
            description: '한국전력의 4.0 차세대 영업배전시스템 내 배전계기 파트 운영을 하였습니다. Front-end는 Websquare라는 UI Framework를 사용하였고 Back-end는 Spring기반의 BXM Framework를 사용 DB는 Oracle을 사용 하였습니다.',
            date: '2022.01 ~ 2022.04',
            datetime: '2020-03-16',
            category: { title: '유지보수', href: '#' }
        },
        {
            id: 3,
            title: '한국수력원자력 ERP 고도화 개발',
            href: '#',
            description: '한국수력원자력의 차세대 시스템 개발대상 중 개발리더 한명과 1년간 단위시스템 4개를 개발하였습니다. Front-end는 Nexacro UI Framework를 사용하였고 Back-end는 Ezngo사의 Spring 기반 Framework를 사용, DB는 Oracle을 사용하였습니다.',
            date: '2021.01 ~ 2021.12',
            datetime: '2020-03-16',
            category: { title: '개발', href: '#' }
        },
        {
            id: 4,
            title: '한국전력 영업통계시스템 유지보수',
            href: '#',
            description: '한국전력의 e-영업통계시스템을 유지보수하였습니다. Front-end는 html, css, jsp, javascript를 사용하였고 Back-end는 Java DB는 오라클을 사용하였습니다.',
            date: '2020.05 ~ 2020.12',
            datetime: '2020-03-16',
            category: { title: '유지보수', href: '#' }
        },
        {
            id: 5,
            title: '한국수력원자력 원전건설 경험DB 통합시스템 3단계 개발',
            href: '#',
            description: '한국전력의 e-영업통계시스템을 유지보수하였습니다. Front-end는 html, css, jsp, javascript를 사용하였고 Back-end는 Java DB는 오라클을 사용하였습니다.',
            date: '2019.11 ~ 2020.04',
            datetime: '2020-03-16',
            category: { title: '개발', href: '#' }
        },
        {
            id: 6,
            title: '한국수력원자력 Q-Net 시스템 보완개발',
            href: '#',
            description: '한국전력의 e-영업통계시스템을 유지보수하였습니다. Front-end는 html, css, jsp, javascript를 사용하였고 Back-end는 Java DB는 오라클을 사용하였습니다.',
            date: '2019.09 ~ 2019.10',
            datetime: '2020-03-16',
            category: { title: '개발', href: '#' }
        },
    ]

    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">History..</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            4년차 개발자 지금까지 쌓아온 경력입니다.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            
                                        </a>
                                        {post.title}
                                    </h3>
                                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default History
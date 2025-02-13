import { Jost } from 'next/font/google';
import DocIntroCard from '../components/DocIntroCard';
import DocIntroTitle from '../components/DocIntrotitle';
import DocIntroHeader from '../components/DocIntroHeader';
import DocSocialButton from '../components/DocSocialButton';

import { StaticImageData } from 'next/image';
import Descord from '../../../public/assets/icon/DocSocialButtonIcon/descord.png';
import Telegram from '../../../public/assets/icon/DocSocialButtonIcon/telegram.png';
import X from '../../../public/assets/icon/DocSocialButtonIcon/x.png';
import DocIcon from '../../../public/assets/icon/DocSocialButtonIcon/doc.png';
import Site from '../../../public/assets/icon/DocSocialButtonIcon/site.png';


const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',
});

interface buttonData {
    buttonlog: StaticImageData,
    buttonName: string
}

const SocialButtonData: buttonData[] = [
    {
        buttonlog: Site,
        buttonName: 'WebSite'
    },
    {
        buttonlog: X,
        buttonName: 'X'
    },
    {
        buttonlog: Telegram,
        buttonName: 'Telegram'
    },
    {
        buttonlog: Descord,
        buttonName: 'Discord'
    },
    {
        buttonlog: DocIcon,
        buttonName: 'Docs'
    },
]

export default function Docs() {
    return (
        <div className='flex'>
            <div className={`w-[1300px] m-auto xs:px-[25px] flex flex-col items-center ${jost.className} `}>
                <h1 className="text-[16px] mt-[56px] text-center font-200 text-white">Content on this page was provided by the peaq team</h1>
                <div className="w-[300px] h-[300px] border-1 border-white mt-[26px] flex justify-center items-center">
                    <h1 className='text-[36px] text-white'>LOGO</h1>
                </div>
                <h1 className="xs:text-[24px] text-[14px] xs:mt-[25px] mt-[56px] text-center font-200 text-white sm:w-[544px] xs:w-full w-[375px] px-[25px] sm:px-0">
                    Lorem ipsum dolor sit amet consectetur. Neque at sed eu leo tortor. Vitae sed morbi amet mattis. Neque sit viverra morbi metus.
                </h1>
                <h1 className="text-[16px] xs:text-[24px] xs:mt-[40px] mt-[60px] text-center font-400 text-white">
                    Launch Has Ended
                </h1>

                <DocIntroHeader
                    margintop='106px'
                    title='Introduction'
                />
                <DocIntroCard selectIcon={true} margintop='75px' />
                <DocIntroTitle
                    margintop='106px'
                    title='Lorem ipsum dolor sit amet consectetur. Nibh in enim fames non orci. Faucibus platea dolor elit ridiculus scelerisque eget ac. Penatibus ipsum iaculis diam mollis proin pretium quam.'
                />
                <DocIntroTitle
                    margintop='50px'
                    title='At sit mi ultrices aenean leo lectus blandit. Faucibus aliquam convallis id dolor a mauris mauris. Amet purus id pretium phasellus neque netus fames viverra. Faucibus eget elit cursus ac ipsum id. Viverra nisl pellentesque tortor sapien vitae. In sit vestibulum nunc natoque turpis id fringilla.'
                />

                <div className='mt-[90px] w-full flex flex-col gap-y-[42px]'>
                    {Array.from({ length: 2 }).map((_, index) => (
                        <DocIntroCard key={index} selectIcon={false} margintop='0px' />
                    ))}
                </div>
                <DocIntroTitle
                    margintop='106px'
                    title='Lorem ipsum dolor sit amet consectetur. Ipsum vestibulum nibh in duis pellentesque nisl hendrerit massa. A tortor tellus cras iaculis vel pharetra nunc enim maecenas. Nam diam pulvinar suspendisse duis. Sollicitudin nunc quam facilisi ut viverra tincidunt eleifend lectus. Blandit ipsum et tincidunt in purus vel mattis mi. Fermentum in ac sit risus viverra ut facilisi ut aliquet. Odio risus faucibus non vehicula mauris suscipit. Imperdiet enim tellus rhoncus gravida turpis. Venenatis ut enim sed enim turpis velit convallis etiam phasellus. Nisi laoreet elementum mattis massa dictum viverra metus risus. Ipsum risus vulputate nisl ut nisl vulputate eget quisque. Dui lorem tincidunt dictumst gravida praesent phasellus lorem morbi. Aliquam elementum orci volutpat habitasse est ipsum. Purus amet suspendisse amet consequat.'
                />
                <DocIntroCard selectIcon={false} margintop='42px' />
                <hr className='w-full border-[#838383] mt-[120px]' />
                <DocIntroHeader
                    margintop='72px'
                    title='Token Launch Structure'
                />
                <DocIntroTitle
                    margintop='42px'
                    title='Please note, that you can only submit one purchase request, please make sure you submit your final intended amount on your initial request.'
                />
                <DocIntroCard
                    margintop='42px'
                    selectIcon={false}
                />
                <DocIntroHeader
                    margintop='73px'
                    title='Token Launch Allocation'
                />
                <DocIntroCard
                    margintop='73px'
                    selectIcon={false}
                />
                <i>
                    <DocIntroTitle
                        margintop='72px'
                        title='Lorem ipsum dolor sit amet consectetur. Quis nisl amet commodo velit orci ut vitae purus est. Elementum lacinia vitae morbi nulla lectus adipiscing. Ac non risus felis non aenean vestibulum. Tortor sagittis nisi cursus scelerisque. Nibh pulvinar lacus nunc mollis augue aliquet amet a quis. Tristique elit pellentesque sit ultrices amet egestas. Gravida semper aliquam turpis et sed pharetra eu ac. Dictum sodales rhoncus sed porta ullamcorper eleifend. Semper nunc gravida varius at. Cursus maecenas mi id morbi lobortis dolor nullam. Semper quisque neque egestas sit leo nisi consectetur. Ultricies in in vitae turpis nisl tincidunt viverra. Erat nunc ut purus ultricies elit quis. Vitae nec amet sed at ut sit eleifend sit.'
                    />
                </i>
                <hr className='w-full border-[#838383] mt-[71px]' />
                <DocIntroHeader
                    margintop='71px'
                    title='Launch Timeline'
                />
                <DocIntroCard
                    margintop='71px'
                    selectIcon={false}
                />
                <hr className='w-full border-[#838383] mt-[71px]' />
                <DocIntroHeader
                    margintop='71px'
                    title='What is “PROJECT NAME”'
                />
                <i>
                    <DocIntroTitle
                        margintop='60px'
                        title='Lorem ipsum dolor sit amet consectetur. Quis nisl amet commodo velit orci ut vitae purus est. Elementum lacinia vitae morbi nulla lectus adipiscing. Ac non risus felis non aenean vestibulum. Tortor sagittis nisi cursus scelerisque. Nibh pulvinar lacus nunc mollis augue aliquet amet a quis. Tristique elit pellentesque sit ultrices amet egestas. Gravida semper aliquam turpis et sed pharetra eu ac. Dictum sodales rhoncus sed porta ullamcorper eleifend. Semper nunc gravida varius at. Cursus maecenas mi id morbi lobortis dolor nullam. Semper quisque neque egestas sit leo nisi consectetur. Ultricies in in vitae turpis nisl tincidunt viverra. Erat nunc ut purus ultricies elit quis. Vitae nec amet sed at ut sit eleifend sit.'
                    />
                </i>
                <DocIntroCard
                    margintop='57px'
                    selectIcon={false}
                />
                <i>
                    <DocIntroTitle
                        margintop='71px'
                        title='Lorem ipsum dolor sit amet consectetur. Quis nisl amet commodo velit orci ut vitae purus est. Elementum lacinia vitae morbi nulla lectus adipiscing. Ac non risus felis non aenean vestibulum. Tortor sagittis nisi cursus scelerisque. Nibh pulvinar lacus nunc mollis augue aliquet amet a quis. Tristique elit pellentesque sit ultrices amet egestas. Gravida semper aliquam turpis et sed pharetra eu ac. Dictum sodales rhoncus sed porta ullamcorper eleifend. Semper nunc gravida varius at. Cursus maecenas mi id morbi lobortis dolor nullam. Semper quisque neque egestas sit leo nisi consectetur. Ultricies in in vitae turpis nisl tincidunt viverra. Erat nunc ut purus ultricies elit quis. Vitae nec amet sed at ut sit eleifend sit.'
                    />
                </i>
                <hr className='w-full border-[#838383] mt-[71px]' />
                <DocIntroHeader
                    margintop='71px'
                    title='Tokenomics'
                />
                <i>
                    <DocIntroTitle
                        margintop='71px'
                        title='Lorem ipsum dolor sit amet consectetur. Quis nisl amet commodo velit orci ut vitae purus est. Elementum lacinia vitae morbi nulla lectus adipiscing. Ac non risus felis non aenean vestibulum. Tortor sagittis nisi cursus scelerisque. Nibh pulvinar lacus nunc mollis augue aliquet amet a quis. Tristique elit pellentesque sit ultrices amet egestas. Gravida semper aliquam turpis et sed pharetra eu ac. Dictum sodales rhoncus sed porta ullamcorper eleifend. Semper nunc gravida varius at. Cursus maecenas mi id morbi lobortis dolor nullam. Semper quisque neque egestas sit leo nisi consectetur. Ultricies in in vitae turpis nisl tincidunt viverra. Erat nunc ut purus ultricies elit quis. Vitae nec amet sed at ut sit eleifend sit.'
                    />
                </i>
                <div className='mt-[71px] w-full flex flex-col gap-y-[71px]'>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <DocIntroCard key={index} selectIcon={false} margintop='0px' />
                    ))}
                </div>
                <hr className='w-full border-[#838383] mt-[71px]' />
                <DocIntroHeader
                    margintop='71px'
                    title='Roadmap'
                />
                <i>
                    <DocIntroTitle
                        margintop='71px'
                        title='Lorem ipsum dolor sit amet consectetur. Quis nisl amet commodo velit orci ut vitae purus est. Elementum lacinia vitae morbi nulla lectus adipiscing. Ac non risus felis non aenean vestibulum. Tortor sagittis nisi cursus scelerisque. Nibh pulvinar lacus nunc mollis augue aliquet amet a quis. Tristique elit pellentesque sit ultrices amet egestas. Gravida semper aliquam turpis et sed pharetra eu ac. Dictum sodales rhoncus sed porta ullamcorper eleifend. Semper nunc gravida varius at. Cursus maecenas mi id morbi lobortis dolor nullam. Semper quisque neque egestas sit leo nisi consectetur. Ultricies in in vitae turpis nisl tincidunt viverra. Erat nunc ut purus ultricies elit quis. Vitae nec amet sed at ut sit eleifend sit.'
                    />
                </i>
                <DocIntroCard
                    margintop='71px'
                    selectIcon={false}
                />
                <hr className='w-full border-[#838383] mt-[71px]' />
                <DocIntroHeader
                    margintop='71px'
                    title='Community Links'
                />
                <div className='mt-[62px] w-full flex flex-wrap justify-center mb-[140px] gap-[24px] '>
                    {SocialButtonData.map((item, index) => (
                        <DocSocialButton key={index} buttonlog={item.buttonlog} buttonName={item.buttonName} />
                    ))}
                </div>
            </div>
        </div>
    )
}
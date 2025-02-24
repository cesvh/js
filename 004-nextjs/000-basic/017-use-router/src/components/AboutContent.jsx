'use client';
import { useRouter } from "next/navigation";

export default function AboutContent() {
    const router = useRouter();
    return <>
        <section>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, velit inventore. Obcaecati sed doloribus ipsa fugiat, quod sapiente! Deleniti quaerat labore, eveniet dolorum soluta sequi vel, assumenda recusandae perferendis a quod architecto. Ratione non praesentium architecto fuga! Adipisci, voluptatem provident officia maiores quisquam aperiam dignissimos velit iure molestiae unde quae placeat asperiores, beatae exercitationem nemo quis eius autem veniam ipsam modi aliquid aut? Excepturi exercitationem quam esse reiciendis illo consequuntur molestiae, ullam, ab quaerat suscipit nemo nostrum nam aliquam aspernatur nihil, quidem doloribus. Sit quaerat culpa molestiae unde quos accusamus dolores provident nesciunt. Sequi illum alias nesciunt. Amet vitae natus quam cupiditate iure voluptatum omnis explicabo vero tenetur impedit quo quae voluptatem est, perferendis nam odit dignissimos incidunt laboriosam ullam eum nihil sed sapiente. In tenetur est doloremque voluptatibus animi commodi, obcaecati magnam quisquam vitae voluptas ab unde libero at voluptates quo maxime natus possimus facere. Officiis consectetur assumenda nisi fuga in molestiae veniam architecto natus! Quas quo rem commodi modi ex repudiandae? Aspernatur, ipsam, nobis fugiat nostrum blanditiis iure vero velit dolorum consequuntur rerum nesciunt voluptas qui iusto rem excepturi eveniet libero vel mollitia nam dolor enim numquam, voluptatum illo. Quam dolore impedit cumque dignissimos iure? Quaerat, quibusdam dignissimos.</p>
            <button 
                className="bg-sky-400 px-3 py-2 rounded-md" 
                onClick={ () => {
                    console.log("Click en: Acerca de");
                    router.push('/');
                }}>
                Click Me
            </button>
        </section>
    </>;
};

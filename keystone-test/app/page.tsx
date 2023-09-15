import Image from 'next/image'
import Link from "next/link";
import styles from './page.module.css'

import client from "../apolloClient";
import { getUsers } from '../apolloClient/gqlQuery';

export default function Page({ users }) {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
          {
            users && users.map((curr) => {
              return (
                <>
                  <div key={curr}>
                    <div className={styles.card}>
                      <Link href={`/${curr.id}`} className="cursor-pointer">
                          <span>{curr?.email}</span>
                      </Link>
                      <p className='py-4 text-center'>
                        {curr?.name}
                      </p>
                      <p className='py-4 text-center'>
                        # { curr?.productsCount }
                      </p>
                    </div>
                  </div>
                </>
              );
            })
          }
        </div>
    </main>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getUsers,
  });
  return { props: { users: data.users } };
}

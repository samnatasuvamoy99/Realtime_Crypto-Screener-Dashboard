import React from 'react'
import Image from "next/image"
import DataTable from './components/DataTabel'
import Link from 'next/link'


// making a interface for columns to update the market  graph

const columns: DataTableColumn<TrendingCoin>[] = [

  {
    header: 'Name',
    cellClassName: 'name-cell',

    cell: (coin) => {
      const items = coin.item;
      return (
        <Link href={`/coins/${items.id}`}>
          <Image src={items.large} alt={items.name} width={36} height={36}></Image>
        </Link>
      )
    }

  }






]


const page = () => {
  return <main className='main-container'>
    <section className='home-grid'>

      <div id="coin-overview">
        <div className='header'>
          <Image src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" alt="Bitcoin" width={30} height={20} />
          <div className="info">
            <p>BitCoin / BTC</p>
            <h1>
              $8976373.00
            </h1>

          </div>
        </div>

      </div>


      <p>Treading Coins</p>

      <DataTable columns={[{ header: 'Title' }, { header: "price" }]}
      />

    </section>

    <section className='w-full mt-7 space-y-4'>
      <p>
        Categories
      </p>

    </section>
  </main>
}
export default page
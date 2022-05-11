<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UrlSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('urls')->insert(
            [
                [
                    'original_url' => 'https://hackthestuff.com/url-encode',
                    'shorten_url' => 'Exfa8z',
                    'views' => 0,
                ],
                [
                    'original_url' => 'https://www.youtube.com/watch?v=GXeoHjFwLHU	',
                    'shorten_url' => 'PGwikJ',
                    'views' => 0,
                ],
                [
                    'original_url' => 'https://web.whatsapp.com/',
                    'shorten_url' => '6PSupm',
                    'views' => 0,
                ],
                [
                    'original_url' => 'https://www.facebook.com/',
                    'shorten_url' => 'SgrPii',
                    'views' => 0,
                ],
                [
                    'original_url' => 'https://flowbite.com/docs/components/forms/',
                    'shorten_url' => 'Edqxeu',
                    'views' => 0,
                ]
            ]
        );
    }
}

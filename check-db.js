// Quick script to check Supabase database structure
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read .env.local file
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  line = line.trim();
  if (line && !line.startsWith('#')) {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      envVars[match[1].trim()] = match[2].trim();
    }
  }
});

console.log('📡 Connecting to:', envVars.NEXT_PUBLIC_SUPABASE_URL);

const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function checkDatabase() {
  console.log('🔍 Checking Supabase Database Structure...\n');

  // Check programs table
  console.log('📋 PROGRAMS TABLE:');
  const { data: programs, error: progError } = await supabase
    .from('programs')
    .select('*')
    .limit(1);
  
  if (progError) {
    console.log('❌ Error:', progError.message);
  } else {
    console.log('✅ Table exists');
    if (programs && programs.length > 0) {
      console.log('📊 Sample columns:', Object.keys(programs[0]));
      console.log('📈 Sample data:', programs[0]);
    } else {
      console.log('ℹ️  Table is empty (no data yet)');
    }
  }

  // Check users table
  console.log('\n👥 USERS TABLE:');
  const { data: users, error: userError } = await supabase
    .from('users')
    .select('*')
    .limit(1);
  
  if (userError) {
    console.log('❌ Error:', userError.message);
  } else {
    console.log('✅ Table exists');
    if (users && users.length > 0) {
      console.log('📊 Sample columns:', Object.keys(users[0]));
    } else {
      console.log('ℹ️  Table is empty (no data yet)');
    }
  }

  // Check donations table
  console.log('\n💰 DONATIONS TABLE:');
  const { data: donations, error: donError } = await supabase
    .from('donations')
    .select('*')
    .limit(1);
  
  if (donError) {
    console.log('❌ Error:', donError.message);
  } else {
    console.log('✅ Table exists');
    if (donations && donations.length > 0) {
      console.log('📊 Sample columns:', Object.keys(donations[0]));
    } else {
      console.log('ℹ️  Table is empty (no data yet)');
    }
  }

  // Check saheli_posts table
  console.log('\n📝 SAHELI_POSTS TABLE:');
  const { data: posts, error: postError } = await supabase
    .from('saheli_posts')
    .select('*')
    .limit(1);
  
  if (postError) {
    console.log('❌ Error:', postError.message);
  } else {
    console.log('✅ Table exists');
    if (posts && posts.length > 0) {
      console.log('📊 Sample columns:', Object.keys(posts[0]));
    } else {
      console.log('ℹ️  Table is empty (no data yet)');
    }
  }

  console.log('\n✨ Database check complete!');
}

checkDatabase().catch(console.error);

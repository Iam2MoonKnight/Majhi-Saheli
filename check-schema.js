// Check detailed database schema
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

const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function checkSchema() {
  console.log('🔍 Checking Database Schema Details...\n');

  // Query information_schema to get column details
  const { data, error } = await supabase.rpc('get_table_columns');
  
  if (error) {
    console.log('ℹ️  Using alternative method to check columns...\n');
    
    // Try inserting and catching validation errors to see column structure
    const tables = ['programs', 'users', 'donations', 'saheli_posts'];
    
    for (const table of tables) {
      console.log(`\n📋 ${table.toUpperCase()} TABLE:`);
      const { error } = await supabase
        .from(table)
        .select('*')
        .limit(0);
      
      if (error) {
        console.log('❌', error.message);
      } else {
        console.log('✅ Table accessible via API');
        
        // Try to get column info by doing a select
        const { data: sample } = await supabase
          .from(table)
          .select('*')
          .limit(1);
        
        if (sample && sample.length > 0) {
          console.log('📊 Columns:', Object.keys(sample[0]).join(', '));
        }
      }
    }
  }
  
  // Let's also check if we can insert test data
  console.log('\n\n🧪 Testing Data Operations...\n');
  
  // Test inserting a program
  console.log('📋 Testing PROGRAMS table insert...');
  const { data: testProgram, error: progInsertError } = await supabase
    .from('programs')
    .insert({
      name: 'Test Program',
      description: 'This is a test program to verify schema',
      category: 'education',
      impact_metric: 'Students educated',
      beneficiaries_impacted: 100
    })
    .select();
  
  if (progInsertError) {
    console.log('❌ Insert failed:', progInsertError.message);
  } else {
    console.log('✅ Insert successful! Columns confirmed:');
    if (testProgram && testProgram.length > 0) {
      console.log('   ', Object.keys(testProgram[0]).join(', '));
      
      // Clean up test data
      await supabase.from('programs').delete().eq('id', testProgram[0].id);
      console.log('🧹 Test data cleaned up');
    }
  }

  console.log('\n✨ Schema check complete!');
}

checkSchema().catch(console.error);

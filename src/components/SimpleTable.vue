<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
        <th class="text-left">
        </th>
          <th class="text-left">
            
          </th>
          <th class="text-left">
            mac address
          </th>
          <th class="text-left">
            device name
          </th>
          <th class="text-left">
            last ip address
          </th>
          <th class="text-left">
            date registered
          </th>
          <th class="text-left">
            assigned
          </th>
          <th class="text-left">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
          style="border:none; padding: 2px;"
        >
        <td class="text-left"
        
        ><div :class="item.color" style="width:10px; height: 100%"></div></td>
          <td>{{ item.id }}</td>
        <td>
            {{ item.mac }}
            <v-btn
            class="float-right"
            color="primary"
            icon
            text
            tile
            ><i class="fa fa-edit" /></v-btn>
        </td>
          <td>{{ item.device }}</td>
          <td>{{ item.last }}</td>
          <td>{{ item.date }}</td>
          <td><v-btn
                class="float-left"
                color="primary"
                icon
                text
                tile
                ><i class="fa fa-edit" /></v-btn>
                <v-btn
                class="float-left"
                color="black"
                icon
                text
                tile
                ><i class="fa fa-lock" /></v-btn>
                <v-btn
                class="float-left"
                color="red"
                icon
                text
                tile
                ><i class="fa fa-trash" /></v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {

    name: 'SimpleTable',

    data () {
      return {
        desserts: [
          {
            id: '#1',
            color: 'blue',
            mac: 'Frozen Yogurt',
            device: 'Frozen Yogurt',
            last: '10.111.23.12',
            date: '31.8.2020',
          },
          {
            id: '#2',
            color: 'blue',
            mac: 'Frozen Yogurt',
            device: 'Frozen Yogurt',
            last: '10.111.23.12',
            date: '31.8.2020',
          },
          {
            id: '#3',
            color: 'red',
            mac: 'Frozen Yogurt',
            device: 'Frozen Yogurt',
            last: '10.111.23.12',
            date: '31.8.2020',
          },
          {
            id: '#4',
            color: 'yellow',
            mac: 'Frozen Yogurt',
            device: 'Frozen Yogurt',
            last: '10.111.23.12',
            date: '31.8.2020',
          },
          {
            id: '#5',
            color: 'blue',
            mac: 'Frozen Yogurt',
            device: 'Frozen Yogurt',
            last: '10.111.23.12',
            date: '31.8.2020',
          },
          {
            id: '#6',
            color: 'blue',
            mac: 'Frozen Yogurt',
            device: 'Frozen Yogurt',
            last: '10.111.23.12',
            date: '31.8.2020',
          },
          {
            id: '#6',
            color: 'red',
            mac: 'Frozen Yogurt',
            device: 'Frozen Yogurt',
            last: '10.111.23.12',
            date: '31.8.2020',
          },
          {
            id: '#7',
            color: 'blue',
            mac: 'Frozen Yogurt',
            device: 'Frozen Yogurt',
            last: '10.111.23.12',
            date: '31.8.2020',
          },
         
        ],
      }
    },
  }
</script>